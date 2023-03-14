import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {

  if (blok.columns[0].year) {

    return (
      <div {...storyblokEditable(blok)} className="chronology mt-24 border-t-4 border-black">
        {blok.columns.map((nestedBlok) => (
          <div key={nestedBlok._uid} className="flex flex-col md:flex-row border-b-4 border-black">
            <StoryblokComponent blok={nestedBlok} />
          </div>
        ))}
      </div>
    )
  }

  return null
};

export default Grid;
