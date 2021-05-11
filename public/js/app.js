console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

//messageOne.textContent = 'From Javascript';

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});

/*const geocode =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
  'Boston' +
  '.json?access_token=pk.eyJ1IjoicmluaXZlbGt1bSIsImEiOiJja2g5ZGdpc2YwMmVzMnRtM3NmM3hnb3k3In0.nzMoAAsnTjqPfw3KYj6pUw&limit=1';
fetch(geocode).then((response) => {
  response.json().then((data) => {
    if (data.features.length === 0) {
      return console.log('There was an error!');
    }
    const forecast = `http://api.weatherstack.com/current?access_key=6770a9b456391cc46d70b054e7524cf2&query=${data.features[0].center[1]},${data.features[0].center[0]}`;
    fetch(forecast).then((response) => {
      response.json().then((data) => {
        console.log(data.location.name + ', ' + data.location.region);
      });
    });
  });
});*/
