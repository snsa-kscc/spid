import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const RightChrono = ({ blok }) => {
  if (blok.year) {
    return (
      <>
        <div className="order-2 md:order-none p-16 md:p-20 lg:p-32 xl:p-40 basis-1/2 sm:text-lg">
          {render(blok.description)}
        </div>
        <div className="order-1 basis-1/2 grid place-items-center bg-[#E2E2E2] p-16 outline">
          <div className="inline-block bg-[#B1D2F5] px-20 py-6 lg:px-24 sm:py-8 border-4 border-black rounded-lg shadow-spid">
            <p className="font-mono text-xl sm:text-3xl">{blok.year}</p>
          </div>
        </div>
      </>
    )
  }
  return null
}

export default RightChrono