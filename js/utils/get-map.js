/* global L:readonly */
const mapInit = () => {
  const map = L.map("map-canvas").setView(
    {
      lat: 59.96831,
      lng: 30.31748,
    },
    16
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  }).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl:
      "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg",
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 59.96831,
      lng: 30.31748,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    }
  );

  mainPinMarker.addTo(map);

  mainPinMarker.on("moveend", (evt) => {
    console.log(evt.target.getLatLng());
  });
  return map;
};

export { mapInit };
