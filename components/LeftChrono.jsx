import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const LeftChrono = ({ blok }) => {
  if (blok.year) {
    return (
      <>
        <div className="basis-1/2 grid place-items-center bg-[#B1D2F5] p-16">
          <div className="inline-block bg-[#5BA1E5] px-20 py-6 lg:px-24 sm:py-8 border-4 border-black rounded-lg shadow-spid">
            <p className="font-mono text-xl sm:text-3xl text-white">{blok.year}</p>
          </div>
        </div>
        <div className="p-16 md:p-20 lg:p-32 xl:p-40 basis-1/2 outline sm:text-lg">
          {render(blok.description)}
        </div>
      </>
    )
  }
  return null
}

export default LeftChrono