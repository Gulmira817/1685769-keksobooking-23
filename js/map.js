// eslint-disable-next-line no-redeclare
/* global L:readonly */
import {
  FORM,
  ACCURACY,
  START_MAP_SKALE
} from './constants.js';

const StartPosition = {
  LAT: 35.68378,
  LNG: 139.75423,
};

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

const ADDRESS = FORM.querySelector('#address');
const MAP = L.map('map-canvas');

const initMap  = (callback) => {
  MAP.on('load', callback)
    .setView({
      lat: StartPosition.LAT,
      lng: StartPosition.LNG,
    }, START_MAP_SKALE);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(MAP);
};

const PIN_MAIN_MARKER  = L.marker(
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
  const pinCoords = markerName.getLatLng();
  ADDRESS.value = `${(pinCoords.lat).toFixed(ACCURACY)}, ${(pinCoords.lng).toFixed(ACCURACY)}`;
};

const resetPopup = () => {
  const popap = document.querySelector('.leaflet-popup');
  if (popap) {
    popap.remove();
  }
};

const addAddressValue = () => {
  ADDRESS.value = `${StartPosition.LAT}, ${StartPosition.LNG}`;
};

const resetMap = () => {
  PIN_MAIN_MARKER .setLatLng({
    lat: StartPosition.LAT,
    lng: StartPosition.LNG,
  });

  MAP.setView({
    lat: StartPosition.LAT,
    lng: StartPosition.LNG,
  },START_MAP_SKALE);

  resetPopup();
  addAddressValue();
};

const markers = [];

const addPins = (points, getCart) => {
  points.forEach((point) => {
    const { lat, lng } = point.location;
    const markerPin = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: PIN,
      });

    markerPin
      .addTo(MAP)
      .bindPopup(getCart(point),
        {
          keepInView: true,
        },
      );
    markers.push(markerPin);
  });
};

const removePins = () => {
  markers.forEach((marker) => marker.remove());
};

PIN_MAIN_MARKER .addTo(MAP);

PIN_MAIN_MARKER .on('moveend', (evt) => {
  addAddress(evt.target);
});

export {
  PIN_MAIN_MARKER ,
  initMap ,
  addAddress,
  addPins,
  resetMap,
  removePins
};
