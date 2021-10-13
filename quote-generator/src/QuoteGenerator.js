import { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [randomQuote, setRandomQuote] = useState("");

  const getQuoteFromAPI = () => {
    let randomNumber = Math.floor(Math.random() * 1643); //gets a random number within the range of data from API
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setRandomQuote(data[randomNumber]);
      });
  };

  useEffect(() => {
    getQuoteFromAPI();
  }, []); //call function on startup

  let authorDisplay = randomQuote.author
  if (!randomQuote.author){authorDisplay = "Anonymous"}

  return (
    <div className="text-center">
      <h1 className="m-20 font-sans font-semibold tracking-wide text-8xl text-blue-900">
        Quote Generator{" "}
      </h1>
      <button onClick={getQuoteFromAPI} className=" bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">Change Quote</button>
      <p className="m-20 font-serif font-semibold tracking-wide text-4xl text-blue-900">"{randomQuote.text}"</p>
      <p>-{authorDisplay}</p>
    </div>
  );
};

export default QuoteGenerator;
