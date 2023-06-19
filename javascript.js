const perPage = 30; // Number of photos per page

function fetchPhotos() {
  let freedom = document.getElementsByClassName('freedom')[0];
  let fire = document.getElementsByClassName('fire')[0];

  console.log("Hello");

  let freedom_text = freedom.value;
  let accessKey = 'MYQMu-wZK7HZ0PEzjosXMhh7WJdDJC0YUxeOiyuIDFQ';

  const apiUrl = `https://api.unsplash.com/search/photos?query=${freedom_text}&client_id=${accessKey}&per_page=${perPage}`;

  axios.get(apiUrl)
    .then(response => {
      const photos = response.data.results.slice(0, perPage); // Get only the first 30 photos
      console.log('Received', photos.length, 'photos');

      // Display the fetched photos
      for (let i = 0; i < photos.length; i++) {
        let img1 = document.createElement("img");
        fire.appendChild(img1);
        img1.setAttribute("src", photos[i].urls.regular);
        img1.setAttribute("width", "250px");
        img1.setAttribute("height", "300px");
      }

      const innerHTMLValue = fire.innerHTML;
      const encodedValue = encodeURIComponent(innerHTMLValue);
      window.location.href = 'index2.html?page_content=' + encodedValue;
    })
    .catch(error => {
      console.log('Error occurred:', error.message); // Log the error message
    });
}

function hahaha() {
  let fire = document.getElementsByClassName('fire')[0];
  //fire.innerHTML = ''; // Clear the existing photos
  fetchPhotos();
}
