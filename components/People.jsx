import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";

const getColumnData = (people) => {
  const entriesPerColumn = 11;

  const names = people
    .split(";")
    .map((person) => person.split(","))
    .sort((a, b) => a[1].localeCompare(b[1], "hr"))
    .map((person) => `${person[0].trim()}, ${person[1].trim()}`);

  const handleColumns = (cols = 1) => {
    const columns = [];
    for (let i = 0; i < names.length; i += entriesPerColumn * cols) {
      columns.push(names.slice(i, i + entriesPerColumn * cols));
    }
    return columns
  }

  // const handleColumnPairs = () => {
  //   const columns = [];
  //   const columnPairs = [];

  //   for (let i = 0; i < names.length; i += entriesPerColumn) {
  //     columns.push(names.slice(i, i + entriesPerColumn));
  //   }

  //   for (let i = 0; i < columns.length; i += 2) {
  //     const firstColumn = columns[i] || [];
  //     const secondColumn = columns[i + 1] || [];

  //     columnPairs.push([firstColumn, secondColumn]);
  //   }

  //   return columnPairs;
  // };

  const handleColumnPairs = () => {
    const columns = names.reduce((acc, name, index) => {
      const columnIndex = Math.floor(index / entriesPerColumn);
      acc[columnIndex] = acc[columnIndex] || [];
      acc[columnIndex].push(name);
      return acc;
    }, []);

    return columns.reduce((acc, column, index) => {
      if (index % 2 === 0) {
        const nextColumn = columns[index + 1] || [];
        acc.push([column, nextColumn]);
      }
      return acc;
    }, []);
  };

  const columns = handleColumns()
  const columnPairs = handleColumnPairs()

  const totalPeople = names.length;

  const lastEntries = handleColumns(2).map((column) => column.at(-1));
  const firstEntries = handleColumns(2).map((column) => column.at(0));

  const firstLetterOfLastEntries = lastEntries.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const firstLetterOfFirstEntries = firstEntries.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const letterPairs = firstLetterOfFirstEntries.map((element, index) => [element, firstLetterOfLastEntries[index]]);

  return {
    columns,
    columnPairs,
    letterPairs,
    totalPeople,
  };
};

const Column = ({ entries }) => {
  return (
    <div className="text-sm md:text-base flex-shrink-0">
      {entries.map((entry) => (
        <div className="p-1" key={entry}>
          {entry.replace(',', '')}
        </div>
      ))}
    </div>
  );
};

const People = ({ blok }) => {
  const [activeIndex, setActiveIndex] = useState(0)


  const { letterPairs: regularLetterPairs, totalPeople: totalRegularPeople, columnPairs: regularColumnPairs } = getColumnData(blok.regularMembers);
  const { columns: associatedColumns, letterPairs: associatedLetterPairs, totalPeople: totalAssociatedPeople } = getColumnData(blok.associatedMembers);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= regularColumnPairs.length) {
      newIndex = regularColumnPairs.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div {...storyblokEditable(blok)} id="clanovi">
      <div className="mb-24 sm:mb-32 pb-10 border-black border-b-2">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-[#B1D2F5] px-8 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-lg shadow-spid my-12">
            <p className="font-mono text-xl sm:text-2xl text-center">{blok.regularTitle}</p>
          </div>
        </div>
        <div className="border-y-2 border-black my-16">
          <div className="lg:container flex justify-evenly mx-auto px-4 py-6 sm:py-0">
            <button onClick={() => {
              updateIndex(activeIndex - 1);
            }}><div className="h-0 w-0 border-x-8 border-x-transparent border-b-8 border-b-[#5BA1E5] rotate-[270deg] transition-all duration-300 ease-in-out hover:border-b-[#B1D2F5]"></div></button>
            <ul className="hidden sm:flex sm:gap-4 md:gap-6 lg:gap-8 px-4">
              {regularLetterPairs.map((pair, index) => (
                <button key={crypto.randomUUID()} onClick={() => updateIndex(index)}>
                  <li className={`font-mono sm:text-xl md:text-2xl lg:text-3xl py-4 px-2 transition-all duration-300 ease-in-out hover:text-slate-600
                  ${index === activeIndex ? "border-black border-b-4" : ""}`} key={crypto.randomUUID()}>{pair[0]} - {pair[1]}</li>
                </button>
              ))}
            </ul>
            <button onClick={() => {
              updateIndex(activeIndex + 1);
            }}><div className="h-0 w-0 border-x-8 border-x-transparent border-b-8 border-b-[#5BA1E5] rotate-90 transition-all duration-300 ease-in-out hover:border-b-[#B1D2F5]"></div></button>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-y-12 justify-center items-end px-4">
          <div className="font-mono basis-1/2 xl:basis-1/3 2xl:basis-1/4 order-1 lg:order-none text-center lg:text-right">
            <p className="text-3xl">Ukupno</p>
            <p className="font-black text-8xl text-[#498DD6]">{totalRegularPeople}</p>
          </div>
          <div className="overflow-hidden">
            <div style={{ transform: `translate(-${activeIndex * 100}%)` }} className="transition-all duration-300 whitespace-nowrap">
              {regularColumnPairs.map(([firstColumn, secondColumn]) => (
                <div className="inline-flex w-full justify-evenly items-center" key={crypto.randomUUID()}>
                  <Column entries={firstColumn} key={crypto.randomUUID()} />
                  {secondColumn.at(-1) && <Column entries={secondColumn} key={crypto.randomUUID()} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24 sm:mb-32 pb-10 border-black border-b-2">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-[#5BA1E5] px-8 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-lg shadow-spid my-12">
            <p className="font-mono text-white text-xl sm:text-2xl text-center">{blok.associatedTitle}</p>
          </div>
        </div>
        <div className="border-y-2 border-black my-16">
          <div className="lg:container flex justify-evenly mx-auto px-4">
            <ul className="flex gap-4 md:gap-6 lg:gap-8 px-4">
              {associatedLetterPairs.map((pair) => (
                <li className="font-mono text-xl md:text-2xl lg:text-3xl py-4 px-2" key={crypto.randomUUID()}>{pair[0]} - {pair[1]}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-y-12 justify-center items-end px-4">
          <div className="font-mono basis-1/3 xl:basis-1/4 order-1 lg:order-none text-center lg:text-right">
            <p className="text-3xl">Ukupno</p>
            <p className="font-black text-8xl text-[#498DD6]">{totalAssociatedPeople}</p>
          </div>
          <div className="inline-flex flex-wrap w-full justify-evenly items-start">
            {associatedColumns.map((column) => (
              <Column entries={column} key={crypto.randomUUID()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People