import { storyblokEditable } from "@storyblok/react";

const Headline = ({ blok }) => {
  if (blok.layout === 'img') {
    return (
      <div {...storyblokEditable(blok)}>
        <div className="font-mono pb-6 xl:py-44 pt-16 sm:pt-36 container mx-auto xl:flex flex-row-reverse items-center">
          <div className="md:w-2/3 xl:w-full ml-auto px-6 basis-1/2">
            <img
              src={blok.image.filename}
              alt={blok.image.alt}
            />
          </div>
          <h1 className="text-3xl sm:text-6xl lg:text-7xl leading-snug sm:leading-snug lg:leading-snug text-center p-6 md:p-10 xl:p-6 basis-1/2">
            {blok.title}
          </h1>
        </div>
      </div>
    );
  }

  else if (blok.layout === 'big_typo') {
    return (
      <div {...storyblokEditable(blok)}>
        <h2 className="font-mono text-5xl sm:text-7xl lg:text-9xl my-24 md:my-36 lg:my-48 xl:my-60 container mx-auto px-4">{blok.title}</h2>
      </div>
    )
  }

  else {
    return (
      <div {...storyblokEditable(blok)}>
        <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug
          my-24 md:my-36 lg:my-48 xl:my-60 container mx-auto px-4">{blok.title}</h2>
      </div>
    )
  }
};

export default Headline;
