import React, { useEffect, useState } from "react";
const axios = require("axios");

export default function Home() {
  const [dataArray, setDataArray] = useState();

  async function getNotes() {
    const fetcheddata = await axios.get("http://localhost:5000/");
    setDataArray(fetcheddata.data.documents);
    console.log(fetcheddata.data.documents);
  }

  // function renderObj() {
  //   Object.keys(dataArray).map((obj, i) => {
  //     return <div>{dataArray[obj].Title}</div>;
  //   });
  // }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <h1>Home Component</h1>
      <h2>DATA IS IN {typeof dataArray} From</h2>
      {/* <div>{renderObj}</div> */}
      {/* <div>
        {dataArray.map(({ Title }) => (
          <p>TITLE IS : {Title} </p>
        ))}
      </div> */}
    </div>
  );
}
