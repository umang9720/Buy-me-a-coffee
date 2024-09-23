import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-4 sm:px-6 lg:px-8">
        <div className="font-bold text-4xl sm:text-5xl flex gap-2 justify-center items-center">Buy Me A Coffee <span><img className="invertImg" src="/tea.gif" width={88} alt="tea" /></span></div>
        <p className="text-center max-w-md">A Crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>
        <div className="flex gap-4">
          <Link href="/Login">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Start Here</button>
          </Link>
          <Link href="/about">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Read More</button>
          </Link>
        </div>
      </div>
      
      <div className="bg-white h-1 opacity-10 my-8"></div>
      
      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-3xl font-bold text-center mb-14">Your fans can buy you a coffee</h1>
        <div className="flex flex-wrap gap-5 justify-around">
          <div className="space-y-3 flex flex-col items-center justify-center">
            <img className="item bg-slate-400 rounded-full p-2" src="/man.gif" width={88} alt="ff" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your fans are available</p>
          </div>
          <div className="space-y-3 flex flex-col items-center justify-center">
            <img className="item bg-slate-400 rounded-full p-2" src="/sikka.gif" width={88} alt="ff" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your fans are available</p>
          </div>
          <div className="space-y-3 flex flex-col items-center justify-center">
            <img className="item bg-slate-400 rounded-full p-2" src="/group.gif" width={88} alt="ff" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your fans are available</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white h-1 opacity-10 my-8"></div>
      
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-14">Learn about Us</h1>
        <iframe className="w-full max-w-2xl aspect-video" src="https://www.youtube-nocookie.com/embed/bLsJ8HkIjwU?si=xVBgy8c90ClAuo8t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
