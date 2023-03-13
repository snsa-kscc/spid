import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Hero = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="pb-1 pt-16 sm:pt-36">
      {blok.info
        ? <div className="md:flex gap-20 container mx-auto px-6">
          <div className="md:flex flex-col justify-between items-start basis-1/2 mb-12">
            <div className="inline-block bg-[#B1D2F5] px-10 py-6 lg:px-16 sm:py-8 border-4 border-black rounded-lg shadow-spid mb-12"><p className="font-mono text-xl sm:text-3xl">{blok.subhead}</p></div>
            <div className="font-medium text-block">
              <p className="leading-relaxed xl:leading-loose md:text-xl lg:ml-28">{blok.info}</p>
            </div>
          </div>
          <div className="basis-1/2 mb-40">
            <img
              src={blok.image.filename}
              alt={blok.image.alt}
            />
          </div>
        </div>
        : <div className="container mx-auto">
          <img
            src={blok.image.filename}
            alt={blok.image.alt}
            className="md:w-1/2 ml-auto px-6"
          />
        </div>}
      <div className={`font-mono text-xl sm:text-3xl lg:text-4xl leading-normal sm:leading-normal lg:leading-normal text-center my-20 ${blok.layout === 'one-color-grad' ? 'diagonal-blue' : 'diagonal-purple'}`}>
        <p className="container p-16 md:p-24 lg:p-40 mx-auto">
          {blok.mission}
        </p>
      </div>
      {render(blok.activities) && <div className="container my-16 sm:my-28 md:my-40 lg:my-56 mx-auto md:text-xl"><div className="font-medium leading-relaxed xl:leading-loose text-block md:w-2/3 ml-auto px-6">{render(blok.activities)}</div></div>}
    </div>
  );
};

export default Hero;
