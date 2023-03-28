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
      <div>
        <div className="inline-block bg-[#B1D2F5] px-8 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-lg shadow-spid my-12">
          <p className="font-mono text-xl sm:text-2xl text-center">{blok.regularTitle}</p>
        </div>
        <div className="overflow-hidden w-2/4 mx-auto">
          <div style={{ transform: `translate(-${activeIndex * 100}%)` }} className="transition-all duration-300 whitespace-nowrap">
            {regularColumnPairs.map(([firstColumn, secondColumn], index) => (
              <div className="inline-flex w-full justify-around items-center" key={index}>
                <Column entries={firstColumn} />
                {secondColumn.at(-1) && <Column entries={secondColumn} />}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-1/4 justify-between mx-auto">
          <button onClick={() => {
            updateIndex(activeIndex - 1);
          }}>prev</button>
          <ul className="flex gap-2">
            {regularLetterPairs.map((pair, index) => (
              <button onClick={() => updateIndex(index)}>
                <li className={index === activeIndex ? "outline" : null} key={index}>{pair[0]} - {pair[1]}</li>
              </button>
            ))}
          </ul>
          <button onClick={() => {
            updateIndex(activeIndex + 1);
          }}>next</button>
        </div>
        <p>Ukupno</p>
        <p>{totalRegularPeople}</p>
      </div>
      <div>
        <div className="inline-block bg-[#5BA1E5] px-8 py-6 lg:px-20 sm:py-8 border-4 border-black rounded-lg shadow-spid my-12">
          <p className="font-mono text-white text-xl sm:text-2xl text-center">{blok.associatedTitle}</p>
        </div>
        <ul>
          {associatedLetterPairs.map((pair, index) => (
            <li key={index}>{pair[0]} - {pair[1]}</li>
          ))}
        </ul>
        <div className="flex flex-wrap items-start justify-evenly">
          {associatedColumns.map((column, index) => (
            <Column entries={column} key={index} />
          ))}
        </div>
        <p>Ukupno</p>
        <p>{totalAssociatedPeople}</p>
      </div>
    </div>
  );
};

export default People