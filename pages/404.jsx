import Layout from "../components/Layout";
import { getStoryblokApi } from "@storyblok/react";

export default function Page404({ locale, locales, defaultLocale, config }) {
  return (
    locale === defaultLocale ? (
      <Layout locale={locale} locales={locales} defaultLocale={defaultLocale} story={{ name: 'Nalaziš se u nepoznatom!' }} config={config}>
        <h1>404 Not found na hr</h1>
      </Layout>
    ) : (
      <Layout locale={locale} locales={locales} defaultLocale={defaultLocale} story={{ name: 'You went into the unknown!' }} config={config}>
        <h1>404 Not found</h1>
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