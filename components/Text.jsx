import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={`max-w-3xl mx-auto text-center px-4 pb-20 ${blok.rightText && "md:ml-[40%]"}`}>
      <div className="article leading-relaxed md:text-xl text-left text-gray-800 md:pb-40">{render(blok.long_text)}</div>
      {blok.link && <p>{blok.link.filename} && {blok.link.name}</p>}
    </div>
  )

}

export default Text