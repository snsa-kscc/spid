import { storyblokEditable } from "@storyblok/react";

const Column = ({ entries }) => {
  return (
    <div style={{ width: "25%", textAlign: "center", borderBottom: "2px solid red" }}>
      {entries.map((entry) => (
        <div style={{ padding: "4px" }} key={entry}>
          {entry.replace(',', '')}
        </div>
      ))}
    </div>
  );
}

const People = ({ blok }) => {

  const entriesPerColumn = 11;

  const namesR = blok.regularMembers
    .split(";")
    .map((person) => person.split(","))
    .sort((a, b) => a[1].localeCompare(b[1], "hr"))
    .map((person) => `${person[0].trim()}, ${person[1].trim()}`);

  let columnsR = [];
  for (let i = 0; i < namesR.length; i += entriesPerColumn) {
    columnsR.push(namesR.slice(i, i + entriesPerColumn));
  }

  const totalPeopleR = namesR.length

  const lastEntriesR = columnsR
    .map((column) => column.at(-1));

  const firstEntriesR = columnsR
    .map((column) => column.at(0));

  const firstLetterOfLastEntriesR = lastEntriesR.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const firstLetterOfFirstEntriesR = firstEntriesR.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const letterPairsR = firstLetterOfFirstEntriesR.map((element, index) => [element, firstLetterOfLastEntriesR[index]]);

  const namesL = blok.associatedMembers
    .split(";")
    .map((person) => person.split(","))
    .sort((a, b) => a[1].localeCompare(b[1], "hr"))
    .map((person) => `${person[0].trim()}, ${person[1].trim()}`);

  let columnsL = [];
  for (let i = 0; i < namesL.length; i += entriesPerColumn) {
    columnsL.push(namesL.slice(i, i + entriesPerColumn));
  }

  const totalPeopleL = namesL.length

  const lastEntriesL = columnsL
    .map((column) => column.at(-1));

  const firstEntriesL = columnsL
    .map((column) => column.at(0));

  const firstLetterOfLastEntriesL = lastEntriesL.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const firstLetterOfFirstEntriesL = firstEntriesL.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const letterPairsL = firstLetterOfFirstEntriesL.map((element, index) => [element, firstLetterOfLastEntriesL[index]]);

  // const letterPairs = firstLetterOfLastEntries.reduce((acc, letter, index, array) => {
  //   const isFirstLetter = index === 0;
  //   const isLastLetter = index === array.length - 1;

  //   if (isFirstLetter) {
  //     acc.push(['A', letter]);
  //   } else if (!isLastLetter) {
  //     acc.push([array[index - 1], letter]);
  //   } else {
  //     const lastPair = acc[acc.length - 1];
  //     if (lastPair && lastPair[1] !== 'Ž') {
  //       acc.push([lastPair[1], 'Ž']);
  //     }
  //   }

  //   return acc;
  // }, []).filter(currentPair => currentPair[0] !== currentPair[1] && currentPair[0] !== 'Ž');

  // const letterPairs = firstLetterOfLastEntries.reduce((acc, letter, index, array) => {
  //   const isFirstLetter = index === 0;
  //   const isLastLetter = index === array.length - 1;

  //   if (isFirstLetter) {
  //     acc.push(['A', letter]);
  //   } else if (!isLastLetter) {
  //     acc.push([array[index - 1], letter]);
  //   } else {
  //     const lastPair = acc[acc.length - 1];
  //     if (lastPair) {
  //       acc.push([lastPair[1], letter]);
  //     }
  //     acc.push([letter, 'Ž']);
  //   }

  //   return acc;
  // }, []);

  return (
    <div {...storyblokEditable(blok)}>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between"
          }}
        >
          {columnsR.map((column, index) => (
            <Column entries={column} key={index} />
          ))}
        </div>
        <p>Ranges</p>
        <ul>
          {letterPairsR.map((pair, index) => (
            <li key={index}>od {pair[0]} do {pair[1]}</li>
          ))}
        </ul>
        <p>total {totalPeopleR}</p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between"
          }}
        >
          {columnsL.map((column, index) => (
            <Column entries={column} key={index} />
          ))}
        </div>
        <p>Ranges</p>
        <ul>
          {letterPairsL.map((pair, index) => (
            <li key={index}>od {pair[0]} do {pair[1]}</li>
          ))}
        </ul>
        <p>total {totalPeopleL}</p>
      </div>
    </div>

  );
}

export default People