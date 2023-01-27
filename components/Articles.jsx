import ArticleTeaser from "./ArticleTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";

const { NEXT_PUBLIC_TOKEN } = process.env;

// const storyblokApi = getStoryblokApi();

const Articles = ({ blok }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {

    const getArticles = async () => {
      // const { data } = await storyblokApi.get(`cdn/stories`, {
      //   starts_with: 'article',
      //   is_startpage: false,
      // });

      const response = await
        fetch(`https://api.storyblok.com/v2/cdn/stories?is_startpage=false&starts_with=article&token=${NEXT_PUBLIC_TOKEN}`);
      const data = await response.json();

      setArticles((prev) => data.stories.map((article) => {
        article.content.slug = article.slug;
        return article;
      }));
    };
    getArticles();
  }, []);

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
    </>
  );
};

export default Articles;
