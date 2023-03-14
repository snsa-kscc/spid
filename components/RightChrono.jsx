import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const RightChrono = ({ blok }) => {
	return (
		<div>{blok.year}</div>
	)
}

export default RightChrono