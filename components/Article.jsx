import { storyblokEditable } from "@storyblok/react";
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer";

const Article = ({ blok, story }) => {
  const date = new Date(story.first_published_at);
  const dateFormat = new Intl.DateTimeFormat("hr");

  const options = {
    markResolvers: {
      [MARK_LINK]: node => {
        if (node.includes("youtube.com")) {
          const match = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/.exec(node)
          const videoId =
            match && match[7].length === 11 ? match[7] : null
          return (
            videoId && (
              <section className="video-container">
                <iframe
                  className="video"
                  title={`https://youtube.com/embed/${videoId}`}
                  src={`https://youtube.com/embed/${videoId}`}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                />
              </section>
            )
          )
        }
      },
    }
  }

  return (
    <div {...storyblokEditable(blok)}>
      <div className="bg-white-half w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide">{story.name}</h1>
          <p className="text-gray-500 text-lg max-w-lg">{dateFormat.format(date)}</p>
          <img className="w-full bg-gray-300 my-16" src={blok.image} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">{render(blok.long_text, options)}</div>
      </div>
    </div>
  );
};

export default Article;
