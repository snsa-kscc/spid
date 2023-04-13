import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";

const Register = ({ blok }) => {
  const stepsArray = blok.steps.split(",").map(step => step.trim())
  return (
    <div {...storyblokEditable(blok)} className="my-28 md:my-40 lg:my-56 px-4" id="uclani-se">
      <div className="container mx-auto">
        <h2 className="font-mono font-medium text-4xl md:text-6xl lg:text-7xl my-16 md:my-32">{blok.headline}</h2>
        <div className="steps font-mono font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {stepsArray.map((item, idx) => {
            return <div key={idx} className="step text-[#498DD6] py-2 sm:py-4 lg:py-6">{item}</div>
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-12 my-10">
          <div className="basis-1/2 flex flex-col items-center">
            <svg className="max-w-[25%]" viewBox="0 0 25 60">
              <path d="M5.7,58.6c0.1,0,0.2,0,0.2-0.2l0.4-1.8c0-0.1,0-0.2-0.2-0.2c-0.1,0-0.2,0-0.2,0.2l-0.4,1.6L4,57.8c-0.1,0-0.2,0-0.2,0.2
              c0,0.1,0,0.2,0.2,0.2L5.7,58.6z M17.3,1.4c5.6,7.6,6.4,12.8,4.8,17c-1.6,4.2-5.6,7.3-9.8,10.6C8.2,32.2,4,35.5,2,40.1
              c-2,4.6-1.6,10.4,3.5,18.4l0.3-0.2c-5-8-5.4-13.7-3.5-18.1c1.9-4.4,6.1-7.7,10.3-10.9c4.1-3.2,8.3-6.4,9.9-10.7
              c1.7-4.3,0.8-9.8-4.9-17.4L17.3,1.4z"/>
            </svg>
            <Link href={blok.criteriaLink.cached_url}>
              <a className="inline-block pt-10">
                <p className="bg-[#B1D2F5] px-16 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-full shadow-spid font-mono text-xl sm:text-2xl xl:text-3xl text-center inline-block
                  hover:bg-[#5BA1E5] transition-all duration-500 ease-in-out">{blok.criteriaTitle}</p>
              </a>
            </Link>
            <a href={blok.form.url} className="inline-block pt-10" target={blok.form.target}>
              <p className="bg-[#B1D2F5] px-16 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-full shadow-spid font-mono text-xl sm:text-2xl xl:text-3xl text-center inline-block
                hover:bg-[#5BA1E5] transition-all duration-500 ease-in-out">{blok.form.title}</p></a>
          </div>
          <div className="basis-1/2 flex flex-col justify-between my-14 gap-8">
            <div className="bg-[#E2E2E2] p-8 border-4 border-black rounded-xl lg:max-w-[60%] ml-auto">{render(blok.paymentInfo)}</div>
            <svg className="max-w-sm hidden md:block" viewBox="0 0 101 41">
              <path d="M96.6,0.4c0.1-0.1,0.4-0.1,0.5,0l2,2.4c0.1,0.1,0.1,0.4,0,0.5c-0.1,0.1-0.4,0.1-0.5,0l-1.8-2.1L94.7,3
              c-0.1,0.1-0.4,0.1-0.5,0c-0.1-0.1-0.1-0.4,0-0.5L96.6,0.4z M1,22.8c5.6-5.4,11.2-8.4,16.7-9.5c5.5-1.2,10.9-0.5,16.1,1.1
              C44.2,17.7,54,25.2,62.6,31c4.3,2.9,8.3,5.4,12,6.8c3.7,1.4,6.9,1.6,9.7,0.1c2.8-1.5,5.3-4.9,7.4-10.8c2.1-6,3.7-14.5,4.7-26.3
              l0.7,0.1c-1.1,11.9-2.7,20.5-4.8,26.5c-2.1,6-4.7,9.6-7.7,11.2c-3.1,1.7-6.6,1.4-10.3,0c-3.7-1.4-7.8-3.9-12.1-6.8
              C53.6,25.7,43.8,18.3,33.5,15c-5.1-1.6-10.4-2.2-15.8-1.1c-5.4,1.1-10.8,4-16.3,9.3L1,22.8z"/>
            </svg>
          </div>
        </div>
      </div>
      <img className="mt-20 xl:mt-52 min-h-[45vh] object-cover" src={blok.image.filename} alt={blok.image.alt} />
    </div>
  )
}

export default Register