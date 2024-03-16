import { storyblokEditable } from "@storyblok/react";
import { Fragment } from "react";
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderArticle = ({ blok, story, categories }) => {

  const catCloud = categories.filter((category) => {
    return blok.topic.includes(category.uuid)
  })

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
          <div className="font-medium text-lg text-[#5BA1E5]">{catCloud.map((cat, idx) => (
            <Fragment key={idx}>
              {idx > 0 && " | "}<Link href={cat.full_slug}><a className="hover:text-[#b1d2f5] transition-all duration-300 ease-in-out">{cat.name.toUpperCase()}</a></Link>
            </Fragment>))}</div>
          <div className="flex items-end flex-wrap gap-12">
            <div className="font-medium italic text-xl md:text-2xl basis-80 grow">{render(blok.intro)}</div>
            <div className="grow basis-80"><img src={blok.image} alt={story.name} /></div>
          </div>
        </div>
      </div>
      <Swiper pagination={{
        type: 'progressbar',
      }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="max-w-3xl mx-auto mt-20">
        {blok.slider_items.map((item, idx) => (
          <SwiperSlide key={idx} className="w-full">
            <img src={item.filename} alt={`${story.name} ${String(idx + 1).padStart(2, '0')}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="max-w-3xl mx-auto text-center pt-20">
        <div className="article leading-relaxed sm:leading-relaxed text-lg sm:text-xl text-left text-gray-800">{render(blok.long_text, options)}</div>
      </div>
    </div>
  );
};

export default SliderArticle;