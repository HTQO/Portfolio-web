

var map = L.map('mapid').setView([51.214, 4.4636], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([51.214, 4.4636]).addTo(map)
    .bindPopup('Deurne, Antwerpen')
    .openPopup();
