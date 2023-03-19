import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Requirements = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="my-28 md:my-40 lg:my-56 container xl:max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-20 md:gap-32 mb-28 lg:mb-48">
        <div className="basis-1/2 inline-block bg-[#B1D2F5] px-8 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-lg shadow-spid">
          <p className="font-mono text-xl sm:text-2xl text-center">{blok.leftSubHead}</p>
        </div>
        <div className="basis-1/2 text-block lg:text-lg">{render(blok.rightText)}</div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-20 md:gap-32">
        <div className="basis-1/2 order-2 lg:order-none lg:text-lg text-block">{render(blok.leftText)}</div>
        <div className="basis-1/2 order-1 lg:order-none inline-block bg-[#5BA1E5] px-8 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-lg shadow-spid">
          <p className="font-mono text-white text-xl sm:text-2xl text-center">{blok.rightSubHead}</p>
        </div>
      </div>
    </div>
  )
}

export default Requirements