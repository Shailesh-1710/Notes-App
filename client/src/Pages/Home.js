import React, { useEffect, useState } from "react";
const axios = require("axios");

export default function Home() {
  const [dataArray, setDataArray] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  async function getNotes() {
    const fetcheddata = await axios.get("http://localhost:5000/");
    setDataArray(fetcheddata.data.documents);
    setDataLoading(false);
    console.log(fetcheddata.data.documents);
  }
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="grid place-items-center ">
      <div className="grid place-items-center pt-3 h-auto  rounded-2xl  ">
        <h1 className=".h1">Home Component</h1>
        {dataLoading && (
          <div className="grid content-center place-items-center ">
            <h1 className=" text-xl text-center "> LOADING DATA PLEASE WAIT</h1>
          </div>
        )}
        <div class="grid grid-cols-3 text-center ">
          {dataArray.map((element) => {
            return (
              <div class="flex m-3 h-auto" key={element.Uuid}>
                <div class="block py-6 px-6 rounded-lg shadow-lg bg-white w-80">
                  <h5 class="text-gray-900 text-xl leading-tight font-medium ">
                    {element.Title}
                  </h5>
                  <p class="text-gray-700 text-base">{element.Description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
