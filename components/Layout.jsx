import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children, locale, locales, defaultLocale, story, config }) => {
  const blok = config.content.header_menu
  return (
    <div className="bg-[#FBFBFB]">
      <Head title={story.name} />
      <Navigation
        blok={blok}
        locale={locale}
        locales={locales}
        defaultLocale={defaultLocale}
      />
      {children}
      <Footer />
    </div>
  )
};

export default Layout;
