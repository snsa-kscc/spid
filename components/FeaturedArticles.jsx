import { storyblokEditable } from "@storyblok/react";
import AllArticles from "./AllArticles";

const FeaturedArticles = ({ blok, locale }) => {
  if (locale === 'hr') {
    return (
      <div {...storyblokEditable(blok)} className="py-20 md:py-40 mb-6 container mx-auto text-left">
        <div className="container grid place-items-center my-20">
          <div className="inline-block bg-[#B1D2F5] px-14 py-6 lg:px-24 sm:py-8 border-4 border-black rounded-lg shadow-spid mb-12">
            <p className="font-mono text-xl sm:text-3xl">{blok.title}</p>
          </div>
        </div>
        <AllArticles blok={blok} isStandalone={false} perPage={5} />
      </div>
    );
  }
  return null
};

export default FeaturedArticles;