import { storyblokEditable } from "@storyblok/react";
import { useEffect, useState, useRef } from "react";

const Accordion = ({ blok }) => {

  const [toggle, setToggle] = useState(false)
  const [height, setHeight] = useState()

  const refHeight = useRef()

  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`)
  }, [])

  return (
    <div {...storyblokEditable(blok)} id="dokumentacija" className="container lg:max-w-screen-lg mx-auto px-4 my-32 sm:my-40 border-y-2 border-black">
      <button
        onClick={() => setToggle(!toggle)}
        className="flex justify-between items-center gap-20 p-6 w-full">
        <div className="font-mono text-xl sm:text-2xl lg:text-3xl leading-normal sm:leading-normal lg:leading-normal transition-all duration-300 ease-in-out hover:text-slate-600">{blok.title}</div>
        <svg className={toggle ? "rotate-90 transition-all duration-300" : "transition-all duration-300"} width="40" height="40" viewBox="0 0 512 512">
          <path d="M361.891,242.03L187.347,9.31c-7.714-10.283-22.298-12.365-32.582-4.655
          c-10.283,7.713-12.367,22.3-4.655,32.582l164.072,218.758L150.111,474.762c-7.713,10.282-5.627,24.871,4.655,32.582
          c4.186,3.14,9.086,4.656,13.945,4.656c7.076,0,14.064-3.215,18.637-9.311l174.544-232.732
          C368.097,261.683,368.097,250.304,361.891,242.03z"/>
        </svg>
      </button>
      <div ref={refHeight} className={toggle
        ? "opacity-100 [transition:height_0.3s,_opacity_0.3s_0.3s]"
        : "opacity-0 [transition:opacity_0.3s,_height_0.3s_0.3s]"}
        style={{ height: toggle ? `${height}` : "0px" }}>
        <div className="py-6">
          {blok.subtitle1 && <div className="font-mono sm:text-lg lg:text-xl leading-normal sm:leading-normal lg:leading-normal px-4 pb-4">{blok.subtitle1}</div>}
          <div className="px-2 pb-4">{blok.loop1.map(item => (
            <div key={item._uid} className="pb-4 md:pb-3">
              <a href={item.asset.filename || item.asset.url}
                className="inline-block transition-all duration-300 hover:text-slate-500">{item.asset.name || item.asset.title}</a>
            </div>)
          )}</div>
        </div>
        {blok.loop2 && <div className="pb-10">
          <div className="font-mono sm:text-lg lg:text-xl leading-normal sm:leading-normal lg:leading-normal p-4">{blok.subtitle2}</div>
          <div className="px-2 pb-4">{blok.loop2.map(item => (
            <div key={item._uid} className="pb-4 md:pb-3">
              <a href={item.asset.filename || item.asset.url}
                className="inline-block transition-all duration-300 hover:text-slate-500">{item.asset.name || item.asset.title}</a>
            </div>)
          )}</div>
        </div>}
      </div>
    </div>
  )
}

export default Accordion