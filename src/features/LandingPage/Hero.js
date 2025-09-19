import Marquee from "@/components/Marquee";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-5 text-center bg-[linear-gradient(76deg,#F2F2F2_20.9%,#777_65.37%)] bg-clip-text text-transparent">
        <h2 className="text-2xl font-medium ">嗨，我是 James Lee</h2>
        <h1 className="text-[32px] font-medium">
          全端工程師
          <br /> x<br /> UI/UX Designer
        </h1>
        <p className="text-[20px] font-medium">
          擁有6年開發經驗，
          <br />
          專精後端系統與前端設計，
          <br />
          能同時兼顧程式架構與使用者體驗
        </p>
        <div className="flex items-center justify-center gap-4 w-full mt-2">
          <button className="flex items-center justify-center flex-1 flex-grow h-[40px] px-4 bg-[#FFFFFF]/90 rounded-sm text-black cursor-pointer">
            與我聯繫
          </button>
          <button className="flex items-center justify-center flex-1 flex-grow h-[40px] px-4 border border-[#F2F2F2] text-white rounded-sm cursor-pointer">
            查看作品
          </button>
        </div>
      </div>
      <Marquee />
    </>
  );
};

export default Hero;
