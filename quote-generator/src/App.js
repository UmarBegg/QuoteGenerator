import QuoteGenerator from "./QuoteGenerator";
import NewQuote from "./NewQuote";
import { useState } from "react";

function App() {
  const [stateOfAddNewButton, setStateOfAddNewButton] = useState(false);
  const [stateOfViewButton, setStateOfViewButton] = useState(false);
  const [myRandomQuote, setMyRandomQuote] = useState("");

  const handleClick = () => {
    setStateOfAddNewButton(true);
  };

  const handleViewClick = () => {
    const getJSON = JSON.parse(localStorage.getItem("quotes"));
    if (!getJSON) {
      return null;
    }
    setStateOfViewButton(true);
    let myRandomNumber = Math.floor(Math.random() * getJSON.length);
    setMyRandomQuote(getJSON[myRandomNumber]);
  };

  let authorDisplay = myRandomQuote.author;
  if (!myRandomQuote.author) {
    authorDisplay = "Anonymous";
  }

  return (
    <div className="flex flex-col items-center text-center">
      {!stateOfAddNewButton && <QuoteGenerator />}

      <div className="flex flex-row">
        {!stateOfAddNewButton && (
          <button
            onClick={handleViewClick}
            className="  hover:text-purple-900 hover:underline text-purple-800 font-bold py-2 px-4 rounded-full"
          >
            Your Quotes
          </button>
        )}
        {!stateOfAddNewButton && (
          <button
            onClick={handleClick}
            className=" hover:text-purple-900 hover:underline text-purple-800 font-bold py-2 px-4 rounded-full"
          >
            Add a Quote
          </button>
        )}
      </div>

      {stateOfAddNewButton && <NewQuote />}
      {stateOfViewButton && !stateOfAddNewButton && (
        <p className="m-5 font-serif font-semibold tracking-wide text-2xl text-blue-900">
          "{myRandomQuote.text}"
        </p>
      )}
      {stateOfViewButton && !stateOfAddNewButton && <p>-{authorDisplay}</p>}
    </div>
  );
}

export default App;
