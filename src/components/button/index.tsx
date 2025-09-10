export default function Button({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`px-8 py-4 rounded-4xl text-lg font-semibold cursor-pointer decoration-0 inline-block transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </a>
  );
}
