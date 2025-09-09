type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as: Tag = "h2",
  variant = "h2",
  children,
  className = "",
}: HeadingProps) {
  return <Tag className={`heading-${variant} ${className}`}>{children}</Tag>;
}
