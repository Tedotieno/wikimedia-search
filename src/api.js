const fetchDataFromAPI = async (searchText = "Foo") => {
  const apiURL = `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${searchText}&limit=10`;
  const response = await fetch(apiURL);
  const responseData = await response.json();

  return responseData;
};

export { fetchDataFromAPI };
