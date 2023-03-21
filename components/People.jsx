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

  const regularNames = blok.regularMembers
    .split(";")
    .map((person) => person.split(","))
    .sort((a, b) => a[1].localeCompare(b[1], "hr"))
    .map((person) => `${person[0].trim()}, ${person[1].trim()}`);

  let regularColumns = [];
  for (let i = 0; i < regularNames.length; i += entriesPerColumn) {
    regularColumns.push(regularNames.slice(i, i + entriesPerColumn));
  }

  const totalRegularPeople = regularNames.length

  const lastRegularEntries = regularColumns
    .map((column) => column.at(-1));

  const firstRegularEntries = regularColumns
    .map((column) => column.at(0));

  const firstLetterOfLastRegularEntries = lastRegularEntries.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const firstLetterOfFirstRegularEntries = firstRegularEntries.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const letterRegularPairs = firstLetterOfFirstRegularEntries.map((element, index) => [element, firstLetterOfLastRegularEntries[index]]);

  const AssociatedNames = blok.associatedMembers
    .split(";")
    .map((person) => person.split(","))
    .sort((a, b) => a[1].localeCompare(b[1], "hr"))
    .map((person) => `${person[0].trim()}, ${person[1].trim()}`);

  let associatedColumns = [];
  for (let i = 0; i < AssociatedNames.length; i += entriesPerColumn) {
    associatedColumns.push(AssociatedNames.slice(i, i + entriesPerColumn));
  }

  const totalAssociatedPeople = AssociatedNames.length

  const lastAssociatedEntries = associatedColumns
    .map((column) => column.at(-1));

  const firstAssociaetdEntries = associatedColumns
    .map((column) => column.at(0));

  const firstLetterOfLastAssociatedEntries = lastAssociatedEntries.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const firstLetterOfFirstAssociatedEntries = firstAssociaetdEntries.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const letterAssociatedPairs = firstLetterOfFirstAssociatedEntries.map((element, index) => [element, firstLetterOfLastAssociatedEntries[index]]);

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
          {regularColumns.map((column, index) => (
            <Column entries={column} key={index} />
          ))}
        </div>
        <p>Ranges</p>
        <ul>
          {letterRegularPairs.map((pair, index) => (
            <li key={index}>od {pair[0]} do {pair[1]}</li>
          ))}
        </ul>
        <p>total {totalRegularPeople}</p>
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
          {associatedColumns.map((column, index) => (
            <Column entries={column} key={index} />
          ))}
        </div>
        <p>Ranges</p>
        <ul>
          {letterAssociatedPairs.map((pair, index) => (
            <li key={index}>od {pair[0]} do {pair[1]}</li>
          ))}
        </ul>
        <p>total {totalAssociatedPeople}</p>
      </div>
    </div>

  );
}

export default People