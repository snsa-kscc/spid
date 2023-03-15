import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok, locale }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok) => (
        <StoryblokComponent locale={locale} blok={blok} key={blok._uid} />
      ))
      : null}
  </main>
);



export default Page;
