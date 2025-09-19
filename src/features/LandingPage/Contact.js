import { SiLine, SiInstagram } from "react-icons/si";
import { LuPhone } from "react-icons/lu";

const CONTENT = [
  {
    title: "Line",
    account: "b10015040",
    url: "https://line.me/ti/p/jlUfHWWDkF",
    icon: SiLine,
    bgColor: "#222222",
  },
  {
    title: "Instagram",
    account: "j606888",
    url: "https://www.instagram.com/j606888/",
    icon: SiInstagram,
    bgColor: "#313131",
  },
  {
    title: "Phone",
    account: "0968313044",
    icon: LuPhone,
    bgColor: "#222222",
  },
];

const Contact = () => {
  return (
    <div className="relative px-5 py-15 md:py-20 lg:pb-40" id="contact">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-xl font-semibold text-[#F2F2F2] md:text-[28px]">
              與我聯絡
            </h1>
            <p className="text-sm text-[#C2C2C2] text-center md:text-base">
              有想要做的網站卻不知道從何開始嗎？
              <br /> 歡迎聯繫我來討論看看。
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            {CONTENT.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-3 h-40 items-center justify-center cursor-pointer md:w-full md:h-[240px] group"
                style={{ backgroundColor: item.bgColor }}
                onClick={() =>
                  item.title === "Phone"
                    ? (window.location.href = `tel:${item.account}`)
                    : window.open(item.url, "_blank")
                }
              >
                <item.icon className="w-10 h-10 text-[#F2F2F2]/70 md:w-14 md:h-14 md:border-b-2 md:border-b-[#FB923C] md:pb-2 " />
                <div className="flex flex-col gap-0.5 w-26 md:hidden">
                  <h4 className="text-xl font-semibold text-[#C2C2C2]">
                    {item.title}
                  </h4>
                  <p className="text-[#999999] ">{item.account}</p>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[#191919]/90 origin-center scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 will-change-transform flex items-center justify-center flex-col gap-1">
                  <h4 className="text-[24px] font-semibold text-[#C2C2C2] tracking-[2px]">
                    {item.title}
                  </h4>
                  <p className="text-[#999999] text-[20px] tracking-[2px]">
                    {item.account}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
