import "../styles/tailwind.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Article from "../components/Article";
import FeaturedArticles from "../components/FeaturedArticles";
import Grid from "../components/Grid";
import Page from "../components/Page";
import AllArticles from "../components/AllArticles";
import CategoryArticles from "../components/CategoryArticles";
import Headline from "../components/Headline";
import Hero from "../components/Hero";
import LeftChrono from "../components/LeftChrono"
import RightChrono from "../components/RightChrono"
import Text from "../components/Text";
import KeyPoints from "../components/KeyPoints";
import Register from "../components/Register";
import Requirements from "../components/Requirements";
import People from "../components/People"
import Organization from "../components/Organization";
import Accordion from "../components/Accordion";

const { NEXT_PUBLIC_TOKEN } = process.env;

const components = {
  featured_articles: FeaturedArticles,
  grid: Grid,
  page: Page,
  post: Article,
  posts: AllArticles,
  category: CategoryArticles,
  headline: Headline,
  hero: Hero,
  left_chronology: LeftChrono,
  right_chronology: RightChrono,
  text: Text,
  key_points: KeyPoints,
  register: Register,
  requirements: Requirements,
  people: People,
  organization: Organization,
  accordion: Accordion
};

storyblokInit({
  accessToken: NEXT_PUBLIC_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

//console.log('Made with love by dvasadva.');

export default MyApp;
