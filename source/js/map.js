const DEFAULT_ZOOM = 19;
const LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors';

const mapImage = document.querySelector('.map__image');
mapImage.classList.remove('map__image--nojs');
const mapContainer = document.querySelector('.map__map');
mapContainer.classList.remove('map__map--nojs');

const map = L.map('map', {
  scrollWheelZoom: false
});

const pinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 52],
  iconAnchor: [19, 52],
});

map.setView({
    lat: 59.968400,
    lng: 30.317425,
  }, DEFAULT_ZOOM,);

L.tileLayer(
  LAYER,
  {
    attribution: LAYER_ATTRIBUTION,
  },
).addTo(map);

L.marker(
  {
    lat: 59.968343,
    lng: 30.317525,
  },
  {
    draggable: false,
    icon: pinIcon,
  }
).addTo(map);
