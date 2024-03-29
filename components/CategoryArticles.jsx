import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const { NEXT_PUBLIC_TOKEN } = process.env;

const CategoryArticles = ({ story, categories }) => {
  const { asPath } = useRouter()
  const isCurrentPage = (href) => asPath === href;

  const perPage = 6;
  const [articles, setArticles] = useState([]);
  const [articlesLoaded, setArticlesLoaded] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {

    const getArticles = async () => {

      const response = await
        fetch(`https://api.storyblok.com/v2/cdn/stories?is_startpage=false&starts_with=novosti&page=${page}&per_page=${perPage}&filter_query[topic][exists]=${story.uuid}&sort_by=first_published_at:desc&token=${NEXT_PUBLIC_TOKEN}`);
      const data = await response.json();

      setArticles((prev) => [...prev, ...data.stories.map((article) => {
        article.content.slug = article.slug;
        return article;
      })]);
      setArticlesLoaded(data.stories.length);
    };
    getArticles();
  }, [page]);

  const loadMoreArticles = () => {
    setPage(page + 1);
  }

  return (
    <>
      <div>
        <h2 className="font-mono text-5xl sm:text-7xl md:text-9xl my-24 md:my-36 lg:my-48 xl:my-60 container mx-auto pl-4">{story.content.title}</h2>
        <div className="border-black border-y-2 my-16 text-sm lg:text-base">
          <div className="container mx-auto 2xl:max-w-screen-xl flex flex-wrap gap-2 py-6 px-4">
            <Link href="/novosti"><a className="border-2 border-[#5BA1E5] rounded-full text-[#5BA1E5]
                py-2 px-5 transition-all duration-300 hover:border-[#B1D2F5] hover:text-[#B1D2F5]">#Sve novosti</a></Link>
            {categories.map((category) => (
              <Link key={category.id} href={category.full_slug}>
                <a className={isCurrentPage("/" + category.full_slug)
                  ? "border-2 border-[#5BA1E5] py-2 px-5 text-white bg-[#5BA1E5] rounded-full"
                  : "border-2 border-[#5BA1E5] rounded-full text-[#5BA1E5] py-2 px-5 transition-all duration-300 hover:border-[#B1D2F5] hover:text-[#B1D2F5]"}>
                  #{category.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className="container grid grid-cols-spid gap-14 px-4 mx-auto 2xl:max-w-screen-xl mb-24"
        {...storyblokEditable(story.content)}
      >
        {articles[0] && articles.map((article) => (
          <ArticleTeaser article={article} key={article.uuid} />
        ))}
      </div>
      {articlesLoaded === perPage
        ? <div className="container mx-auto my-20 md:my-40 p-6 grid place-items-center">
          <button className="bg-[#B1D2F5] px-20 py-6 lg:px-24
            sm:py-8 border-4 border-black rounded-lg shadow-spid flex items-center gap-4 sm:gap-8" onClick={loadMoreArticles}>
            <p className="font-mono text-xl sm:text-3xl">UČITAJ VIŠE</p>
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9393 27.0607C11.5251 27.6464 12.4749 27.6464 13.0607 27.0607L22.6066 17.5147C23.1924 16.9289 23.1924 15.9792 22.6066 15.3934C22.0208 14.8076 21.0711 14.8076 20.4853 15.3934L12 23.8787L3.51472 15.3934C2.92893 14.8076 1.97919 14.8076 1.3934 15.3934C0.807612 15.9792 0.807612 16.9289 1.3934 17.5147L10.9393 27.0607ZM10.5 6.55671e-08L10.5 26L13.5 26L13.5 -6.55671e-08L10.5 6.55671e-08Z" fill="black" />
            </svg>
          </button>
        </div> : null}
    </>
  );
};

export default CategoryArticles;
