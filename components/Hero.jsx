import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="font-mono pb-1 pt-16 sm:pt-36">
      <div className="container mx-auto">
        <img
          src={blok.image.filename}
          alt={blok.image.alt}
          className="md:w-1/2 ml-auto px-6"
        />
      </div>
      <div className={`text-xl sm:text-3xl lg:text-4xl leading-normal sm:leading-normal lg:leading-normal text-center my-20 ${blok.layout === 'one-color-grad' ? 'diagonal-blue' : 'diagonal-purple'}`}>
        <p className="container p-16 md:p-24 lg:p-40 mx-auto">
          {blok.mission}
        </p>
      </div>
    </div>
  );
};

export default Hero;
