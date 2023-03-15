import Layout from "../components/Layout";
import { getStoryblokApi } from "@storyblok/react";

export default function Page404({ locale, locales, defaultLocale, config }) {
  return (
    locale === defaultLocale ? (
      <Layout locale={locale} locales={locales} defaultLocale={defaultLocale} story={{ name: 'Nalaziš se u nepoznatom!' }} config={config}>
        <h2 className="font-mono text-6xl sm:text-7xl md:text-9xl my-24 md:my-36 lg:my-48 xl:my-60 container mx-auto pl-4">404 - stranica nije pronađena</h2>
      </Layout>
    ) : (
      <Layout locale={locale} locales={locales} defaultLocale={defaultLocale} story={{ name: 'You went into the unknown!' }} config={config}>
        <h2 className="font-mono text-6xl sm:text-7xl md:text-9xl my-24 md:my-36 lg:my-48 xl:my-60 container mx-auto pl-4">404 - page not found</h2>
      </Layout >
    )
  );
}

export async function getStaticProps({ locale, locales, defaultLocale }) {
  let { data: config } = await getStoryblokApi().get('cdn/stories/config');

  return {
    props: {
      locale,
      locales,
      defaultLocale,
      config: config ? config.story : false,
    },
  };
}