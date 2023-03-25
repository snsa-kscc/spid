import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok, locale, categories }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok) => (
        <StoryblokComponent locale={locale} blok={blok} key={blok._uid} categories={categories} />
      ))
      : null}
  </main>
);



export default Page;
