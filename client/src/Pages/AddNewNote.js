import React, { useState } from "react";
var axios = require("axios");

export default function AddNewNote() {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  async function handleSubmit(event) {
    console.log("handleSubmit FUNC EXECUTED");
    event.preventDefault(); //

    console.log("TITLE 👉️", titleInput);
    console.log("Description  👉️", descriptionInput);
    const noteData = {
      title: titleInput,
      description: descriptionInput,
    };
    await axios.post("http://localhost:5000/", noteData);

    setTitleInput("");
    setDescriptionInput("");
  }

  return (
    <div>
      <h1>NEW NOTE PAGE</h1>
      <div className="grid place-items-center m-12 ">
        <div class="block p-6 rounded-lg shadow-lg w-2/4 bg-white max-w-sm">
          <form onSubmit={handleSubmit}>
            <div class="form-group mb-6">
              <label
                for="titleInputfield"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Note Title
              </label>
              <input
                required={true}
                value={titleInput}
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="titleInputfield"
                placeholder=" Please Enter Note Title"
                onChange={(event) => setTitleInput(event.target.value)}
              />
            </div>
            <div class="form-group mb-6">
              <label
                for="descriptionInputField"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Note Description
              </label>
              <textarea
                value={descriptionInput}
                required={true}
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                        border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="descriptionInputField"
                rows="3"
                placeholder="Message"
                onChange={(event) => setDescriptionInput(event.target.value)}
              ></textarea>
            </div>
            <div class="form-group form-check mb-6"></div>
            <button
              type="submit"
              class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                    hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
