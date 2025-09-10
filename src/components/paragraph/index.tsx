export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[1.3rem] mb-8 opacity-90 max-w-[600px] mx-auto text-center">
      {children}
    </p>
  );
}
