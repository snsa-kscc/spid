import { useState, useEffect } from "react";
import SortedPeople from "./SortedPeople";

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
      <footer className="text-white bg-[#5BA1E5]">
        <div className="flex flex-col justify-between lg:flex-row gap-24 items-start lg:items-center container mx-auto py-36 md:py-60 px-5">
          <div className="font-mono">
            {locale === 'hr' ? <h3 className="font-black text-6xl sm:text-7xl md:text-9xl mb-20">KONTAKT</h3> : <h3 className="font-black text-6xl sm:text-7xl md:text-9xl mb-20">CONTACT</h3>}
            <a href={`mailto:${blok.email}`}>
              <p className="font-semibold text-3xl sm:text-5xl">{blok.email}</p>
            </a>
          </div>
          <div className="md:text-lg basis-1/4">
            {locale === 'hr' ? <h4 className="font-bold text-xl">Telefon</h4> : <h4 className="font-bold text-xl">Telephone</h4>}
            <a href="tel:+385976362743">
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
            {locale === 'hr' ? <p className="py-2 lg:py-4">Broj u Registru udruga | {blok.registerNo}</p> : <p className="py-2 lg:py-4">Association Register No | {blok.registerNo}</p>}
          </div>
        </div>
        <div className="container mx-auto flex flex-row items-center justify-between gap-6 py-7 px-5">
          <p className=" text-xs sm:text-sm">{blok.footerText}</p>
          <a href="https://www.facebook.com/spid.croatia" target='_blank'><img className='max-w-none' src="fb.png" alt="Facebook" /></a>
        </div>
      </footer>
      <div className={`consent fixed bottom-12 left-52 z-50 text-5xl transition-all duration-700 ease-in-out ${showPopup ? '' : 'opacity-0 select-none pointer-events-none'}`}>
        <p>{blok.cookieConsent}</p>
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white text-lg leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleAccept}>Click me!</button>
      </div>
    </>
  );
};

export default Footer;