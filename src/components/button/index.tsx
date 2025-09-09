export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`px-8 py-4 rounded-4xl text-lg font-semibold cursor-pointer decoration-0 inline-block transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </a>
  );
}
