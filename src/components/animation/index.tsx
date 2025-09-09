export default function Animation() {
  return (
    <div className="bg-animation fixed top-0 left-0 w-full h-full overflow-hidden">
      <div className="floating-shapes absolute w-full h-full">
        <div
          className="shape w-[80px] h-[80px] left-[20%]"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="shape w-[120px] h-[120px] left-[35%]"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="shape w-[60px] h-[60px] left-[35%]"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="shape w-[100px] h-[100px] left-[50%]"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="shape w-[140px] h-[140px] left-[65%]"
          style={{ animationDelay: "8s" }}
        ></div>
        <div
          className="shape w-[90px] h-[90px] left-[80%]"
          style={{ animationDelay: "10s" }}
        ></div>
      </div>
    </div>
  );
}
