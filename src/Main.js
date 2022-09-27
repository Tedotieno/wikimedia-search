import { useState, useEffect } from "react";

import { PagesList } from "./Pages";
import { fetchDataFromAPI } from "./api";

const Main = () => {
  const [pages, setPages] = useState([]);
  const [searchText, setSearchText] = useState("Foo");

  useEffect(() => {
    (async () => {
      const results = await fetchDataFromAPI(searchText);
      setPages(results?.pages);
    })();
  }, [searchText, setPages]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { searchText } = Object.fromEntries(formData);

    setSearchText(searchText?.toLowerCase().trim());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Search Text"
            name="searchText"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <PagesList pages={pages} />
    </div>
  );
};

export default Main;
