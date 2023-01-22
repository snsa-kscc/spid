import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const BlogPost = ({ blok }) => {
  const date = new Date(blok.date);
  const dateFormat = new Intl.DateTimeFormat("hr");

  return (
    <div {...storyblokEditable(blok)}>
      <div className="bg-white-half w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide">{blok.title}</h1>
          <p className="text-gray-500 text-lg max-w-lg">{blok.intro}</p>
          <p className="text-gray-500 text-lg max-w-lg">{dateFormat.format(date)}</p>
          <img className="w-full bg-gray-300 my-16" src={blok.image} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">{render(blok.long_text)}</div>
      </div>
    </div>
  );
};

export default BlogPost;
