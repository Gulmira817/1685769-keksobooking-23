import {ADDRESS ,LIMIT_SINGS,MAP_FILTERS} from './constants.js';

const markers = [];

const StartPosition = {
  LAT: 35.68378,
  LNG: 139.75423,
};

const START_MAP_SKALE = 12;

const PIN_IMG = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const PIN = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const PIN_MAIN_MARKER = L.marker(
  {
    lat: StartPosition.LAT,
    lng: StartPosition.LNG,
  },
  {
    draggable: true,
    icon: PIN_IMG,
  },
);

const addAddress = (markerName) => {
  const pinPositions = markerName.getLatLng();
  ADDRESS.value = `${(pinPositions.lat).toFixed(LIMIT_SINGS)}, ${(pinPositions.lng).toFixed(LIMIT_SINGS)}`;
};

const MAP = L.map('map-canvas');

const initMap = (onLoadSuccess) => {
  MAP.on('load', onLoadSuccess);
  MAP.setView({
    lat: StartPosition.LAT,
    lng: StartPosition.LNG,
  }, START_MAP_SKALE);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(MAP);

  PIN_MAIN_MARKER.addTo(MAP);

  PIN_MAIN_MARKER.on('moveend', (evt) => {
    addAddress(evt.target);
  });
};

const addPins = (data, renderCard) => {

  data.forEach((point) => {
    const Marker = L.marker(
      {
        lat: point.location.lat,
        lng: point.location.lng,
      },
      {
        PIN,
      });

    Marker.addTo(MAP);
    Marker.bindPopup(renderCard(point),
      {
        keepInView: true,
      },
    );
    markers.push(Marker);
  });
};

const resetAddress = () => {
  ADDRESS.value = `${StartPosition.LAT}, ${StartPosition.LNG}`;
};

const setInitialStateMap = () => {
  const balun = document.querySelector('.leaflet-popup');

  PIN_MAIN_MARKER.setLatLng({
    lat: StartPosition.LAT,
    lng: StartPosition.LNG,
  });

  MAP.setView({
    lat: StartPosition.LAT,
    lng: StartPosition.LNG,
  }, START_MAP_SKALE);

  if (balun) {
    balun.remove();
  }
  resetAddress();
};

const removePins = () => {
  markers.forEach((marker) => MAP.removeLayer(marker));
};

export {
  PIN_MAIN_MARKER,
  initMap,
  addAddress,
  addPins,
  setInitialStateMap,
  removePins
};
