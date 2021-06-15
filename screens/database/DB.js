import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1t8JKEHpJe2B83n2N8FpaMyQkRA1LsEhb1aPUUhq9mgM",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h1>data from google sheets</h1>
      <ul>
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>Title -- {item.Title}</li>
            <li>Description - {item.Description}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </>
  );
}
