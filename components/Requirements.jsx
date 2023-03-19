import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Requirements = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="my-40 container mx-auto">
      <p>{blok.leftSubHead}</p>
      <div>{render(blok.rightText)}</div>
      <div>{render(blok.leftText)}</div>
      <p>{blok.rightSubHead}</p>
    </div>
  )
}

export default Requirements