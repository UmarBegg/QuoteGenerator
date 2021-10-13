import { useState } from "react";

const NewQuote = () => {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  const addQuote = () => {
    const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
    localStorage.setItem(
      "quotes",
      JSON.stringify([...quotes, { author: quoteAuthor, text: quoteText }])
    );
  };

  return (
    <div className="mt-44">
      <form className="bg-white shadow-md rounded px-16 pt-12 pb-16 mb-8">
        <input
          className="m-4 shadow appearance-none border rounded w-full py-16 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="quote-input"
          type="text"
          placeholder="Quote..."
          value={quoteText}
          onChange={(e) => setQuoteText(e.target.value)}
        />
        <input
          className="m-4 shadow appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="author-input"
          type="text"
          placeholder="Authors Name"
          value={quoteAuthor}
          onChange={(e) => setQuoteAuthor(e.target.value)}
        />
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Add This Quote" onClick={addQuote} />
      </form>
    </div>
  );
};

export default NewQuote;
