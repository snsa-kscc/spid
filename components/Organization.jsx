import { storyblokEditable } from "@storyblok/react";

function convertToArray(str) {
  return str.split(",").map(step => step.trim())
}

const Organization = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="my-36 md:my-56 px-4 container mx-auto">
      <div className="grid place-items-center pb-10">
        <div className="inline-block bg-[#B1D2F5] px-8 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-lg shadow-spid">
          <p className="font-mono text-xl sm:text-2xl text-center">{blok.title}</p>
        </div>
      </div>
      <div className="md:max-w-[70%] xl:max-w-[50%] ml-auto mt-20">
        <div className="flex flex-col sm:flex-row gap-10 justify-between mb-10">
          <div className="text-center sm:text-left">
            <div className="pb-2"><p className="font-mono text-xl sm:text-2xl lg:text-3xl leading-normal sm:leading-normal lg:leading-normal">{blok.head}</p></div>
            <div>{blok.headPerson}</div>
          </div>
          <div className="text-center sm:text-right">
            <div className="pb-2"><p className="font-mono text-xl sm:text-2xl lg:text-3xl leading-normal sm:leading-normal lg:leading-normal">{blok.viceHead}</p></div>
            <div>{blok.viceHeadPerson}</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 justify-between mb-10">
          <div className="text-center sm:text-left">
            <div className="pb-2"><p className="font-mono text-xl sm:text-2xl lg:text-3xl leading-normal sm:leading-normal lg:leading-normal">{blok.execBoard}</p></div>
            <div>{convertToArray(blok.execBoardPersons).map((item, idx) => <div className="py-1" key={idx}>{item}</div>)}</div>
          </div>
          <div className="text-center sm:text-right">
            <div className="pb-2"><p className="font-mono text-xl sm:text-2xl lg:text-3xl leading-normal sm:leading-normal lg:leading-normal">{blok.supervisoryBoard}</p></div>
            <div>{convertToArray(blok.supervisoryBoardPersons).map((item, idx) => <div className="py-1" key={idx}>{item}</div>)}</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 justify-between">
          <div className="text-center sm:text-left">
            <div className="pb-2"><p className="font-mono text-xl sm:text-2xl lg:text-3xl leading-normal sm:leading-normal lg:leading-normal">{blok.ethicalCounsel}</p></div>
            <div>{convertToArray(blok.ethicalCounselPersons).map((item, idx) => <div className="py-1" key={idx}>{item}</div>)}</div>
          </div>
          <div className="text-center sm:text-right">
            <div className="pb-2"><p className="font-mono text-xl sm:text-2xl lg:text-3xl leading-normal sm:leading-normal lg:leading-normal">{blok.secretary}</p></div>
            <div><p>{blok.secretaryPerson}</p></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-organization gap-8 lg:items-end text-center mt-20">
        <div>
          <div className="mb-4"><p className="font-mono sm:text-lg lg:text-xl leading-normal sm:leading-normal lg:leading-normal">{blok.field1}</p></div>
          <div>{convertToArray(blok.field1Persons).map((item, idx) => <div key={idx}>{item}</div>)}</div>
        </div>
        <div>
          <div className="mb-4"><p className="font-mono sm:text-lg lg:text-xl leading-normal sm:leading-normal lg:leading-normal">{blok.field2}</p></div>
          <div>{convertToArray(blok.field2Persons).map((item, idx) => <div key={idx}>{item}</div>)}</div>
        </div>
        <div>
          <div className="mb-4"><p className="font-mono sm:text-lg lg:text-xl leading-normal sm:leading-normal lg:leading-normal">{blok.field3}</p></div>
          <div>{convertToArray(blok.field3Persons).map((item, idx) => <div key={idx}>{item}</div>)}</div>
        </div>
        <div>
          <div className="mb-4"><p className="font-mono sm:text-lg lg:text-xl leading-normal sm:leading-normal lg:leading-normal">{blok.field4}</p></div>
          <div>{convertToArray(blok.field4Persons).map((item, idx) => <div key={idx}>{item}</div>)}</div>
        </div>
        <div>
          <div className="mb-4"><p className="font-mono sm:text-lg lg:text-xl leading-normal sm:leading-normal lg:leading-normal">{blok.field5}</p></div>
          <div>{convertToArray(blok.field5Persons).map((item, idx) => <div key={idx}>{item}</div>)}</div>
        </div>
      </div>
    </div>
  )
}

export default Organization