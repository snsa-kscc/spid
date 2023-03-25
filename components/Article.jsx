import { storyblokEditable } from "@storyblok/react";
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer";

const Article = ({ blok, story, categories }) => {
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
    <div {...storyblokEditable(blok)} className="px-6 mb-48">
      <div className="w-full">
        <div className="mx-auto max-w-7xl flex flex-col gap-8 mt-16">
          <h3 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug w-3/5">{story.name}</h3>
          <p className="font-medium text-lg text-[#5BA1E5]">{dateFormat.format(date)}</p>
          <div className="flex items-end flex-wrap gap-12">
            <div className="font-medium italic text-xl md:text-2xl basis-80 grow"> {render(blok.intro)}</div>
            <div className="grow basis-80"><img src={blok.image} alt={story.name} /></div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20">
        <div className="article leading-relaxed text-xl text-left text-gray-800">{render(blok.long_text, options)}</div>
      </div>
    </div>
  );
};

export default Article;


