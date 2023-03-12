import { storyblokEditable } from "@storyblok/react";

const Headline = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="">
      <div className=" font-mono pb-6 pt-16 sm:pt-36 container mx-auto">
        <img
          src={blok.image.filename}
          alt={blok.image.alt}
          className="md:w-2/3 ml-auto px-6"
        />
        <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-snug sm:leading-snug lg:leading-snug text-center p-6 md:p-10 lg:p-16">
          {blok.title}
        </h1>
      </div>
    </div>
  );
};

export default Headline;
