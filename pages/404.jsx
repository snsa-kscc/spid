import Layout from "../components/Layout";

export default function Page404({ locale, locales, defaultLocale }) {
  return (
    locale === defaultLocale ? (
      <Layout locale={locale} locales={locales} defaultLocale={defaultLocale} story={{ name: 'Nalaziš se u nepoznatom!' }}>
        <h1>404 Not found na hr</h1>
      </Layout>
    ) : (
      <Layout locale={locale} locales={locales} defaultLocale={defaultLocale} story={{ name: 'You went into the unknown!' }}>
        <h1>404 Not found</h1>
      </Layout >
    )
  );
}

export async function getStaticProps({ locale, locales, defaultLocale }) {
  return {
    props: {
      locale,
      locales,
      defaultLocale,
    },
  };
}