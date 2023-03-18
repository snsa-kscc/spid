import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={`max-w-3xl mx-auto px-4 pb-32 ${blok.rightText && "md:ml-[40%]"}`}>
      <div className="article leading-relaxed md:text-xl text-left text-gray-800">{render(blok.long_text)}</div>
      {blok.link &&
        <a href={`${blok.link.filename}`} className="inline-block pt-20" target="_blank">
          <p className="bg-[#B1D2F5] px-20 py-6 lg:px-24 sm:py-8 border-4 border-black rounded-full shadow-spid
            font-mono text-xl sm:text-3xl text-center inline-block hover:bg-[#5BA1E5] transition-all duration-500 ease-in-out">{blok.link.name}</p>
        </a>}
    </div>
  )
}

export default Text