import { storyblokEditable } from "@storyblok/react";
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer";

const Article = ({ blok, story }) => {
  const date = new Date(story.first_published_at);
  const dateFormat = new Intl.DateTimeFormat("hr");

  const options = {
    markResolvers: {
      [MARK_LINK]: (node, { _, href }) => {
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
                  width="560"
                  height="315"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                />
              </section>
            )
          )
        }
        else {
          return (
            <a href={href}>{node}</a>
          )
        }
      },
    }
  }

  return (
    <div {...storyblokEditable(blok)}>
      <div className="w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h3 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug
            my-24 md:my-36 lg:my-48 xl:my-60 container mx-auto pl-4">{story.name}</h3>
          <p className="text-lg max-w-lg">{dateFormat.format(date)}</p>
          <img className="w-full bg-gray-300 my-16" src={blok.image} alt={story.name} />
          <div className="my-10"> {render(blok.intro)}</div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">{render(blok.long_text, options)}</div>
      </div>
    </div>
  );
};

export default Article;


