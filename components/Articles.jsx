import ArticleTeaser from "./ArticleTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";

const { NEXT_PUBLIC_TOKEN } = process.env;

const Articles = ({ blok }) => {
  const perPage = 6;
  const [articles, setArticles] = useState([]);
  const [articlesLoaded, setArticlesLoaded] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {

    const getArticles = async () => {
      // const { data } = await getStoryblokApi().get(`cdn/stories`, {
      //   starts_with: 'article',
      //   is_startpage: false,
      // });

      //TODO: finish the tutorial
      //TODO: category selection

      //TODO: why storyblokApi doesn't work??
      //TODO: how to prerender this?

      //TODO: wordpress import

      const response = await
        fetch(`https://api.storyblok.com/v2/cdn/stories?is_startpage=false&starts_with=article&page=${page}&per_page=${perPage}&token=${NEXT_PUBLIC_TOKEN}`);
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
      <h1 className="text-3xl">{blok.title}</h1>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {articles[0] && articles.map((article) => (
          <ArticleTeaser article={article.content} key={article.uuid} />
        ))}
      </div>
      {articlesLoaded === perPage ? <button onClick={loadMoreArticles}>load more</button> : null}
    </>
  );
};

export default Articles;
