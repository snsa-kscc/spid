import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children, locale, locales, defaultLocale, story, config }) => {
  const header_menu = config.content.header_menu
  const footer = config.content.footer
  return (
    <div className="bg-[#FBFBFB]">
      <Head title={story.name} />
      <Navigation
        blok={header_menu}
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
