import { storyblokEditable } from "@storyblok/react";

const Headline = ({ blok }) => {
  if (blok.layout === 'img') {
    return (
      <div {...storyblokEditable(blok)} className="">
        <div className=" font-mono pb-6 pt-16 sm:pt-36 container mx-auto">
          <img
            src={blok.image.filename}
            alt={blok.image.alt}
            className="md:w-2/3 ml-auto px-6"
          />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-snug sm:leading-snug lg:leading-snug text-center p-6 md:p-10 lg:p-16">
            {blok.title}
          </h1>
        </div>
      </div>
    );
  }

  else if (blok.layout === 'big_typo') {
    return (
      <div {...storyblokEditable(blok)} className="">
        <h2 className="font-mono text-5xl sm:text-7xl lg:text-9xl my-24 md:my-36 lg:my-48 xl:my-60 container mx-auto px-4">{blok.title}</h2>
      </div>
    )
  }

  else {
    return (
      <div {...storyblokEditable(blok)} className="">
        <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug
          my-24 md:my-36 lg:my-48 xl:my-60 container mx-auto px-4">{blok.title}</h2>
      </div>
    )
  }
};

export default Headline;
