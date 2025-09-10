import { NextApiRequest, NextApiResponse } from "next";

// Simple in-memory rate limiter
const requests = new Map<string, { count: number; resetTime: number }>();

interface RateLimitOptions {
  windowMs: number; // Time window in milliseconds
  max: number; // Maximum number of requests per window
  message?: string;
}

export function rateLimit(options: RateLimitOptions) {
  const { windowMs, max, message = "Too many requests" } = options;

  return (req: NextApiRequest, res: NextApiResponse) => {
    const ip =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      "unknown";
    const now = Date.now();

    // Clean up old entries
    for (const [key, value] of requests.entries()) {
      if (value.resetTime < now) {
        requests.delete(key);
      }
    }

    // Get or create request record for this IP
    const requestRecord = requests.get(ip as string) || {
      count: 0,
      resetTime: now + windowMs,
    };

    // Check if we're in a new window
    if (requestRecord.resetTime < now) {
      requestRecord.count = 0;
      requestRecord.resetTime = now + windowMs;
    }

    // Increment request count
    requestRecord.count++;
    requests.set(ip as string, requestRecord);

    // Check if limit exceeded
    if (requestRecord.count > max) {
      res.status(429).json({
        error: message,
        retryAfter: Math.ceil((requestRecord.resetTime - now) / 1000),
      });
      return false;
    }

    // Add rate limit headers
    res.setHeader("X-RateLimit-Limit", max);
    res.setHeader(
      "X-RateLimit-Remaining",
      Math.max(0, max - requestRecord.count)
    );
    res.setHeader(
      "X-RateLimit-Reset",
      new Date(requestRecord.resetTime).toISOString()
    );

    return true;
  };
}

// Predefined rate limiters
export const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per 15 minutes
  message: "Too many API requests, please try again later",
});

export const strictRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 requests per 15 minutes
  message: "Too many requests, please try again later",
});
