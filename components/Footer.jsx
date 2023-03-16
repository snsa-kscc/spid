import { storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";

const Footer = ({ blok, locale }) => {

  const consentName = 'spid_consent';
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const shouldShow = !localStorage.getItem(consentName);
    if (shouldShow) {
      setTimeout(() => {
        setShowPopup(true);
      }, 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(consentName, true);
    setShowPopup(false);
  };

  return (
    <>
      <footer {...storyblokEditable(blok)} className="text-white bg-[#5BA1E5]">
        <div className="flex flex-col justify-between lg:flex-row gap-24 items-start lg:items-center container mx-auto py-36 md:py-60 px-5">
          <div className="font-mono">
            {locale === 'hr'
              ? <h3 className="font-black text-6xl sm:text-7xl md:text-9xl mb-20">KONTAKT</h3>
              : <h3 className="font-black text-6xl sm:text-7xl md:text-9xl mb-20">CONTACT</h3>}
            <a href={`mailto:${blok.email}`}>
              <p className="font-semibold text-3xl sm:text-5xl">{blok.email}</p>
            </a>
          </div>
          <div className="md:text-lg basis-1/4">
            {locale === 'hr' ? <h4 className="font-bold text-xl">Telefon</h4> : <h4 className="font-bold text-xl">Telephone</h4>}
            <a href={`tel:${blok.phone.split(' ').join('')}`}>
              <p className=" mb-10">{blok.phone}</p>
            </a>
            {locale === 'hr' ? <h4 className="font-bold text-xl">Adresa</h4> : <h4 className="font-bold text-xl">Address</h4>}
            <p>{blok.address}</p>
          </div>
        </div>
        <div className="py-2 lg:py-0 border-y-2 my-7">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between px-5 text-sm">
            <p className="py-2 lg:py-4">OIB | {blok.oib}</p>
            <div className="border-l-2"></div>
            <p className="py-2 lg:py-4">MB | {blok.mb}</p>
            <div className="border-l-2"></div>
            <p className="py-2 lg:py-4">IBAN | {blok.iban}</p>
            <div className="border-l-2"></div>
            <p className="py-2 lg:py-4">RNO | {blok.rno}</p>
            <div className="border-l-2"></div>
            {locale === 'hr'
              ? <p className="py-2 lg:py-4">Broj u Registru udruga | {blok.registerNo}</p>
              : <p className="py-2 lg:py-4">Association Register No | {blok.registerNo}</p>}
          </div>
        </div>
        <div className="container mx-auto flex flex-row items-center justify-between gap-6 py-7 px-5">
          {locale === 'hr'
            ? <p className=" text-xs sm:text-sm">{blok.footerText}</p>
            : <p className=" text-xs sm:text-sm">SPID is supported by Croatian Audiovisual Centre and The Ministry of Culture and Media.</p>}
          <a href="https://www.facebook.com/spid.croatia" target='_blank'><img className='max-w-none' src="/fb.png" alt="Facebook" /></a>
        </div>
      </footer>
      <div className={`consent fixed bottom-12 left-1/2 w-11/12 lg:w-1/2 xl:w-2/5 flex justify-between
        gap-4 py-4 px-12 translate-x-[-50%] z-50 text-sm text-white bg-[#5BA1E5] outline outline-2 transition-all duration-700 ease-in-out ${showPopup
          ? ''
          : 'opacity-0 select-none pointer-events-none'}`}>
        {locale === 'hr' ? <p>{blok.cookieConsent}</p> : <p>This site does not collect personal data of any kind.</p>}
        {locale === 'hr' ? <button className="" onClick={handleAccept}>ZATVORI</button> : <button className="" onClick={handleAccept}>CLOSE</button>}
      </div>
    </>
  );
};

export default Footer;