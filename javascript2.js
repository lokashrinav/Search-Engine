const urlParams = new URLSearchParams(window.location.search);
const decodedValue = decodeURIComponent(urlParams.get('page_content'));
document.getElementsByClassName('fire')[0].innerHTML = decodedValue;