import { storyblokEditable } from "@storyblok/react";

const getColumnData = (people) => {
  const entriesPerColumn = 11;

  const names = people
    .split(";")
    .map((person) => person.split(","))
    .sort((a, b) => a[1].localeCompare(b[1], "hr"))
    .map((person) => `${person[0].trim()}, ${person[1].trim()}`);

  let columns = [];
  for (let i = 0; i < names.length; i += entriesPerColumn) {
    columns.push(names.slice(i, i + entriesPerColumn));
  }

  const totalPeople = names.length;

  const lastEntries = columns.map((column) => column.at(-1));
  const firstEntries = columns.map((column) => column.at(0));

  const firstLetterOfLastEntries = lastEntries.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const firstLetterOfFirstEntries = firstEntries.map(entry => {
    return entry.split(", ")[1][0].toUpperCase()
  })

  const letterPairs = firstLetterOfFirstEntries.map((element, index) => [element, firstLetterOfLastEntries[index]]);

  return {
    columns,
    letterPairs,
    totalPeople,
  };
};

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
};

const People = ({ blok }) => {

  const { columns: regularColumns, letterPairs: regularLetterPairs, totalPeople: totalRegularPeople } = getColumnData(blok.regularMembers);
  const { columns: associatedColumns, letterPairs: associatedLetterPairs, totalPeople: totalAssociatedPeople } = getColumnData(blok.associatedMembers);

  return (
    <div {...storyblokEditable(blok)} id="clanovi">
      <div>
        <p>{blok.regularTitle}</p>
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
          {regularLetterPairs.map((pair, index) => (
            <li key={index}>od {pair[0]} do {pair[1]}</li>
          ))}
        </ul>
        <p>total {totalRegularPeople}</p>
      </div>
      <div>
        <p>{blok.associatedTitle}</p>
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
          {associatedLetterPairs.map((pair, index) => (
            <li key={index}>od {pair[0]} do {pair[1]}</li>
          ))}
        </ul>
        <p>total {totalAssociatedPeople}</p>
      </div>
    </div>
  );
};

export default People