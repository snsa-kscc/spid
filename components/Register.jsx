import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";

const Register = ({ blok }) => {
  const stepsArray = blok.steps.split(",").map(step => step.trim())
  return (
    <div {...storyblokEditable(blok)} className="my-40 container mx-auto">
      <h2>{blok.headline}</h2>
      <div className="steps">
        {stepsArray.map((item, idx) => {
          return <div key={idx} className="step">{item}</div>
        })}
      </div>
      <div>{render(blok.paymentInfo)}</div>
      <Link href={blok.criteria.cached_url}>Kriteriji za članstvo</Link>
      <a href={blok.form.url} target={blok.form.target}>{blok.form.title}</a>
      <img src={blok.image.filename} alt={blok.image.alt} />
    </div>
  )
}

export default Register