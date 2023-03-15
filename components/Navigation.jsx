import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navigation = ({ locale, locales, blok }) => {
  const { pathname, query, asPath } = useRouter();
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b-4 border-black">
      <nav className="md:container md:mx-auto py-6" role="navigation">
        <div className="font-medium md:text-lg flex flex-wrap items-center md:flex-no-wrap relative isolate">
          <div className="mr-4 ml-4 md:mr-8 z-10">
            <Link href="/">
              <a>
                <svg width="89.66" height="71.2">
                  <path d="M27.57,71.2l-10.69-16.99H0V0H89.66V54.21H37.78l-10.22,16.99ZM4.19,50.02h15l8.3,13.19,7.93-13.19h50.06V4.19H4.19V50.02Z" />
                  <g>
                    <path d="M9.92,22.73c1.11,.57,2.81,1.13,4.57,1.13,1.89,0,2.89-.78,2.89-1.97s-.86-1.78-3.05-2.57c-3.03-1.05-5-2.73-5-5.37,0-3.11,2.59-5.48,6.89-5.48,2.05,0,3.57,.43,4.65,.92l-.92,3.32c-.73-.35-2.03-.86-3.81-.86s-2.65,.81-2.65,1.76c0,1.16,1.03,1.67,3.38,2.57,3.21,1.19,4.73,2.86,4.73,5.43,0,3.05-2.35,5.64-7.35,5.64-2.08,0-4.13-.54-5.16-1.11l.84-3.4Z" />
                    <path d="M24.37,9.01c1.27-.22,3.05-.38,5.56-.38s4.35,.49,5.56,1.46c1.16,.92,1.94,2.43,1.94,4.21s-.59,3.3-1.67,4.32c-1.4,1.32-3.48,1.92-5.92,1.92-.54,0-1.03-.03-1.4-.08v6.51h-4.08V9.01Zm4.08,8.27c.35,.08,.78,.11,1.38,.11,2.19,0,3.54-1.11,3.54-2.97,0-1.68-1.16-2.67-3.21-2.67-.84,0-1.4,.08-1.7,.16v5.37Z" />
                    <path d="M44.2,8.77V26.97h-4.13V8.77h4.13Z" />
                    <path d="M47.77,9.01c1.51-.24,3.48-.38,5.56-.38,3.46,0,5.7,.62,7.46,1.94,1.89,1.4,3.08,3.65,3.08,6.86,0,3.48-1.27,5.89-3.03,7.37-1.92,1.59-4.84,2.35-8.4,2.35-2.13,0-3.65-.13-4.67-.27V9.01Zm4.13,14.86c.35,.08,.92,.08,1.43,.08,3.73,.03,6.16-2.03,6.16-6.37,.03-3.78-2.19-5.78-5.73-5.78-.92,0-1.51,.08-1.86,.16v11.91Z" />
                  </g>
                </svg>
              </a>
            </Link>
          </div>
          <div className="ml-auto mr-4 md:hidden z-10">
            <button
              className="flex items-center px-3 py-2 border rounded"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="relative w-full md:w-auto md:flex-grow">
            <div className={`absolute top-0 left-0 md:static md:flex md:items-center bg-[#FBFBFB]
              w-screen h-screen md:w-auto md:h-auto md:translate-y-0 md:visible ${open ? "translate-y-0" : "translate-y-full invisible"} transition-all duration-1000 ease-in-out`}>
              <ul className="flex flex-col mt-4 pt-4 md:flex-row md:items-center md:mt-0 md:pt-0 md:mx-auto md:border-0 navigation-links">
                {locale === 'hr' && blok.map((item) => (
                  <li key={item._uid} className="px-4 py-1 md:p-2 lg:px-8">
                    <Link href={item.link.cached_url}>
                      <a className="block p-1">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col mt-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0 px-2 md:px-0">
                {locales.map((loc) => {
                  return (
                    <li key={loc}>
                      <Link href={{ pathname: loc === 'en' ? '/' : pathname, query }} locale={loc}>
                        <a className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 ${locale === loc ? "bg-[#B1D2F5] text-black" : ""}`}>
                          {loc.toUpperCase()}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
