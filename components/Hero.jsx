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
      <p className="text-xl sm:text-3xl lg:text-4xl leading-normal sm:leading-normal lg:leading-normal text-center p-16 md:p-24 lg:p-40 my-20 diagonal-blue">
        {blok.mission}
      </p>
    </div>
  );
};

export default Hero;
