import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children, locale, locales, defaultLocale, story, config }) => {
  const content = config.content
  const footer = config.content.footer
  return (
    <div className="bg-[#FBFBFB]">
      <Head title={story.name} />
      <Navigation
        blok={content}
        locale={locale}
        locales={locales}
        defaultLocale={defaultLocale}
      />
      {children}
      <Footer
        blok={footer[0]}
        locale={locale}
        locales={locales}
      />
    </div>
  )
};

export default Layout;
