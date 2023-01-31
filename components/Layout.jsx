import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children, locale, locales, defaultLocale, story }) => (
  <div className="bg-gray-300">
    <Head title={story.name} />
    <Navigation
      locale={locale}
      locales={locales}
      defaultLocale={defaultLocale}
    />
    {children}
    <Footer />
  </div>
);

export default Layout;
