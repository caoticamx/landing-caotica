// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ErrorResponse = {
  error: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse>
) {
  // Endpoint temporalmente deshabilitado
  res.status(500).json({
    error: "Internal Server Error",
    message: "This endpoint is currently disabled",
  });
}
