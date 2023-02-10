const people =
  "Vid Adam, Hribar; Jasna Jelena, Andres; Sandra, Antolić; Nataša, Antulov; Sandra, Babić; Siniša, Bahun; Nina, Bajsić; Pavlica, Bajsić; Igor, Baksa; Vedrana, Balen Spinčić; Ana, Ban; Hrvoje, Barbir; Nikolina, Bogdanović; Luka, Bosanac; Mile, Božičević; Nataša, Buljan; Karla, Crnčević; Nikolina, Čuljak; Mislav, Donaj; Ana, Đokić; Goran, Ferčec; Nina, Gojić; Jelena, Gotovac; Katja, Grcić; Boris, Homovec; Nina, Horvat; Ivana, Đula; Anita, Čeko; Marjan, Alčevski; Patrik, Gregurec";

const names = people
  .split(";")
  .map((person) => person.split(","))
  .sort((a, b) => a[1].localeCompare(b[1], "hr"))
  .map((person) => `${person[0].trim()}, ${person[1].trim()}`);

function Column({ entries }) {
  return (
    <div style={{ width: "25%", textAlign: "center" }}>
      {entries.map((entry) => (
        <div style={{ padding: "10px" }} key={entry}>
          {entry.replace(',', '')}
        </div>
      ))}
    </div>
  );
}

export default function SortedPeople() {

  const entriesPerColumn = 11;
  let columns = [];
  for (let i = 0; i < names.length; i += entriesPerColumn) {
    columns.push(names.slice(i, i + entriesPerColumn));
  }

  const lastEntries = columns
    .slice(0, -1)
    .map((column) => column.at(-1));

  const firstEntryLastColumn = columns.at(-1)[0];

  return (
    <>
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
    </>
  );
}