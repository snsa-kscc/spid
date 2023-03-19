import { storyblokEditable } from "@storyblok/react";

const Bullets = ({ blok, activitiesArray, layout }) => {
  return (
    <div {...storyblokEditable(blok)} className="container mx-auto px-4">
      <div className={`grid ${layout}`}>
        <div className="inline-block bg-[#B1D2F5] px-8 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-lg shadow-spid mb-24 sm:mb-32 md:mb-48">
          <p className="font-mono text-xl sm:text-2xl text-center">{blok.subHead}</p>
        </div>
      </div>
      {blok.description && <p className="font-mono text-xl sm:text-3xl lg:text-4xl leading-normal sm:leading-normal lg:leading-normal text-right
        my-20 max-w-4xl mx-auto md:ml-[40%]">{blok.description}</p>}
      {
        activitiesArray.map((activity, index) => {
          return (
            <div key={index} className="font-mono text-xl sm:text-2xl md:text-4xl lg:text-5xl">
              <p className="text-[#498DD6] py-2 md:py-4 lg:py-8">{activity}</p>
              <div className="bg-[#498DD6] h-px"></div>
            </div>
          )
        })
      }
    </div >
  )
}

const KeyPoints = ({ blok }) => {
  const activitiesArray = blok.bullets.split(",").map(activity => activity.trim())

  if (blok.layout === "gradient") {
    const pairs = activitiesArray.reduce((result, _, index, array) => {
      if (index % 2 === 0)
        result.push(array.slice(index, index + 2));
      return result;
    }, []);
    return (
      <div {...storyblokEditable(blok)}>
        <div className="container mx-auto px-4">
          <div className="inline-block bg-[#B1D2F5] px-8 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-lg shadow-spid mb-24 sm:mb-32 md:mb-48">
            <p className="font-mono text-xl sm:text-2xl text-center">{blok.subHead}</p>
          </div>
          <p className="font-mono text-xl sm:text-3xl lg:text-4xl leading-normal sm:leading-normal lg:leading-normal text-right
            my-20 max-w-4xl mx-auto md:ml-[40%]">{blok.description}</p>
        </div>
        <div className="diagonal-blue my-40 py-40">
          <div className="container mx-auto px-4 font-mono text-xl sm:text-2xl md:text-4xl lg:text-5xl">
            {pairs.map((pair, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-between py-1 md:py-3 lg:py-4">
                    <p>{pair[0]}</p>
                    {pair[1] && <p>{pair[1]}</p>}
                  </div>
                  <div className="bg-black h-px"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  else if (blok.layout === "left-subhead")
    return <Bullets blok={blok} activitiesArray={activitiesArray} layout={"place-items-start"} />

  else
    return <Bullets blok={blok} activitiesArray={activitiesArray} layout={"place-items-end"} />
}

export default KeyPoints