import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const LeftChrono = ({ blok }) => {
	return (
		<div>{blok.year}</div>
	)
}

export default LeftChrono