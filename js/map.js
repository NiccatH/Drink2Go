const DEFAULT_ZOOM=19,LAYER="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",LAYER_ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',mapImage=document.querySelector(".map__image");mapImage.classList.remove("map__image--nojs");const mapContainer=document.querySelector(".map__map");mapContainer.classList.remove("map__map--nojs");const map=L.map("map",{scrollWheelZoom:!1}),pinIcon=L.icon({iconUrl:"./img/map-pin.svg",iconSize:[38,52],iconAnchor:[19,52]});map.setView({lat:59.9684,lng:30.317425},19),L.tileLayer(LAYER,{attribution:LAYER_ATTRIBUTION}).addTo(map),L.marker({lat:59.968343,lng:30.317525},{draggable:!1,icon:pinIcon}).addTo(map);