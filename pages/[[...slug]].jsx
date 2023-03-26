import Layout from "../components/Layout";
import { useStoryblokState, getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default function Page({ story, locale, locales, defaultLocale, config, categories }) {
  story = useStoryblokState(story);

  return (
    <Layout locale={locale} locales={locales} defaultLocale={defaultLocale} story={story} config={config}>
      <StoryblokComponent blok={story.content} story={story} locale={locale} categories={categories} />
    </Layout>
  );
}

export async function getStaticProps({ locale, locales, defaultLocale, params, preview }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: preview ? "draft" : "published",
    //resolve_relations: "featured-posts.posts",
    language: locale,
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await getStoryblokApi().get('cdn/stories/config');
  let { data: category } = await getStoryblokApi().get('cdn/stories/?starts_with=category')

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      locale,
      locales,
      defaultLocale,
      config: config ? config.story : false,
      categories: category ? category.stories : false,
    },
    //revalidate: 180,
  };
}

export async function getStaticPaths({ locales }) {
  let { data } = await getStoryblokApi().get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    if (slug === "home") splittedSlug = false;

    // create additional languages
    for (const locale of locales) {
      paths.push({ params: { slug: splittedSlug }, locale });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}
