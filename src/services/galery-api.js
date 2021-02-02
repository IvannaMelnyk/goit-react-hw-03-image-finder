function fetchImages(query, page) {
  const API_KEY = '19123661-7bcff1088ecd25ea1b8bca82a';
  const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Something went wrong.Try again.`));
    })
    .then(data => {
      console.log(data);
      return data.hits;
    });
}

const API = { fetchImages };
export default API;
