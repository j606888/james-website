import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/sit-down.png"
          alt="Sit Down"
          width={240}
          height={180}
          priority
        />
      </main>
      <h1>測試一下的啦</h1>
    </div>
  );
}
