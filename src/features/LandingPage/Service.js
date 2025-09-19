import { LuEarth, LuDatabase, LuBot, LuPalette } from "react-icons/lu";

const CONTENT = [
  {
    title: "企業形象網站設計",
    description:
      "以品牌定位與專業形象為核心，打造能展現企業價值、吸引客戶的網站。",
    tags: ["品牌形象官網設計", "多頁式 / 單頁式網站", "響應式設計與跨裝置體驗"],
    icon: LuEarth,
  },
  {
    title: "後台系統開發",
    description:
      "專注於流程自動化與資料管理，提供高效穩定的系統，協助企業提升營運效率。",
    tags: ["客製化後台系統", "資料庫設計與整合", "權限管理與報表生成"],
    icon: LuDatabase,
  },
  {
    title: "Line 官方帳號與 BOT",
    description:
      "結合 Line API，建立符合需求的自動化互動機制，增強與客戶的溝通與服務效率。",
    tags: ["官方帳號功能設定", "對話流程規劃", "自動化回覆與通知"],
    icon: LuBot,
  },
  {
    title: "UI/UX 設計與 Prototype",
    description:
      "以使用者體驗為導向，透過設計系統與原型製作，讓產品更直覺、好用。",
    tags: [
      "Design System 規劃",
      "使用者介面設計",
      "Wireframe 與 Prototype 製作",
    ],
    icon: LuPalette,
  },
];

const Service = () => {
  return (
    <div className="relative px-5 py-15">
      <div className="absolute left-1/2 -translate-x-1/2 pt-40 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[160px] bg-[#FB923C]/60 rounded-full blur-[120px] " />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-[#FDBA74] rounded-full blur-[60px] " />
      </div>
      <div className="relative p-2 rounded-lg bg-[linear-gradient(174deg,rgba(255,255,255,0.20)_7.31%,rgba(85,85,85,0.20)_93.66%)] z-10">
        <div className="flex flex-col gap-6 items-center bg-[linear-gradient(101deg,#1C1C1C_4.89%,#000_93.16%)] pt-6 pb-3">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-xl font-semibold text-[#F2F2F2]">服務項目</h1>
            <p className="text-sm text-[#C2C2C2]">下面肯定有一個是你需要的吧</p>
          </div>
          <div className="flex flex-col gap-8">
            {CONTENT.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 p-3">
                <div className="flex items-center gap-2">
                  <item.icon size={20} />
                  <h1 className="text-[18px] font-semibold text-[#F2F2F2]">
                    {item.title}
                  </h1>
                </div>
                <p className="text-[#A1A1A1]">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-[#3F3F3F]/60 text-[#F2F2F2] text-sm rounded-sm h-[28px] px-3 flex items-center justify-center"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
