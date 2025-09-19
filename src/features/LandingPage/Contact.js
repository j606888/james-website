import { SiLine, SiInstagram } from "react-icons/si";
import { LuPhone } from "react-icons/lu";

const CONTENT = [
  {
    title: "Line",
    account: "b10015040",
    icon: SiLine,
    bgColor: "#222222",
  },
  {
    title: "Instagram",
    account: "j606888",
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
    <div className="relative px-5 py-15">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl font-semibold text-[#F2F2F2]">與我聯絡</h1>
          <p className="text-sm text-[#C2C2C2] text-center">
            有想要做的網站卻不知道從何開始嗎？
            <br /> 歡迎聯繫我來討論看看。
          </p>
        </div>
        <div className="flex flex-col">
          {CONTENT.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 h-40 items-center justify-center"
              style={{ backgroundColor: item.bgColor }}
            >
              <item.icon size={40} className="text-[#F2F2F2]/70" />
              <div className="flex flex-col gap-0.5 w-26">
                <h4 className="text-xl font-semibold text-[#C2C2C2]">
                  {item.title}
                </h4>
                <p className="text-[#999999] ">{item.account}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
