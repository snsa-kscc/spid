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

  const names = blok.regularMembers
    .split(";")
    .map((person) => person.split(","))
    .sort((a, b) => a[1].localeCompare(b[1], "hr"))
    .map((person) => `${person[0].trim()}, ${person[1].trim()}`);

  const entriesPerColumn = 11;
  let columns = [];
  for (let i = 0; i < names.length; i += entriesPerColumn) {
    columns.push(names.slice(i, i + entriesPerColumn));
  }

  const lastEntries = columns
    .slice(0, -1)
    .map((column) => column.at(-1));

  const firstLetterOfLastEntries = lastEntries.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

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

  const letterPairs = firstLetterOfLastEntries.reduce((acc, letter, index, array) => {
    const isFirstLetter = index === 0;
    const isLastLetter = index === array.length - 1;

    if (isFirstLetter) {
      acc.push(['A', letter]);
    } else if (!isLastLetter) {
      acc.push([array[index - 1], letter]);
    } else {
      const lastPair = acc[acc.length - 1];
      if (lastPair) {
        acc.push([lastPair[1], letter]);
      }
      acc.push([letter, 'Ž']);
    }

    return acc;
  }, []);

  const firstEntryLastColumn = columns.at(-1)[0];

  return (
    <div {...storyblokEditable(blok)}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}
      >
        {columns.map((column, index) => (
          <Column entries={column} key={index} />
        ))}
      </div>
      <h3>Last Entry from every Column except last one</h3>
      <ul>
        {lastEntries.map((entry) => (
          <li key={entry}>{entry.split(", ")[1][0].toUpperCase()}</li>
        ))}
      </ul>
      <h3>First Entry from the Last Column</h3>
      <p>{firstEntryLastColumn.split(", ")[1][0].toUpperCase()}</p>
      <p>ranges</p>
      <ul>
        {letterPairs.map((pair, index) => (
          <li key={index}>od {pair[0]} do {pair[1]}</li>
        ))}
      </ul>
    </div>
  );
}

export default People