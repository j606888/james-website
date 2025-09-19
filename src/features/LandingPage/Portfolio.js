const CONTENT = [
  {
    title: "馬太網路 後台網站",
    description: "串接 Google Maps API 擷取指定區域的公司資訊，並透過第三方服務檢測 Email 健康狀況。同時導入 OpenAI API，實現多項智慧化功能，提升系統應用價值。",
    image: "/port-1.jpg",
  },
  {
    title: "晉弘實業 形象網站",
    description: "與設計師協作，從零打造傳統產業的企業形象網站。透過與業務部門的密切溝通，最終完成兼具專業企業形象與年輕活力元素的網站設計與開發。",
    image: "/port-2.jpg",
  },
  {
    title: "Danceloop",
    description: "一個專為舞蹈社群打造的影音平台。為避免 YouTube 的版權風險，自行實作影片上傳與串流功能，並設計可自訂的 篩選系統，提升課程與 Party 影片的檢索效率與使用體驗。",
    image: "/port-3.jpg",
  },
]

const Portfolio = () => {
  return (
    <div className="relative px-5 scroll-mt-[80px]" id="portfolio">
      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-xl font-semibold text-[#F2F2F2] md:text-[28px]">作品集</h3>
          <p className="text-sm text-[#C2C2C2] md:text-base">接案 & Side Project</p>
        </div>
        <div className="flex flex-col gap-6">
          {CONTENT.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 p-4 bg-[linear-gradient(180deg,#3A3A3A_9.79%,#181818_89.02%)] rounded-[10px] md:flex-row-reverse md:p-6">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-[10px] md:w-[45%]" />
              <div className="flex flex-col gap-4 md:py-3 md:pr-4">
                <h4 className="text-xl font-semibold text-[#F2F2F2] md:text-[24px]">{item.title}</h4>
                <p className="text-[#D3D3D3] leading-[160%]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;