import { storyblokEditable } from "@storyblok/react";

function convertToArray(str) {
  return str.split(",").map(step => step.trim())
}

const Organization = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {convertToArray(blok.execBoardPersons).map((item, idx) => <div key={idx}>{item}</div>)}
    </div>
  )
}

export default Organization