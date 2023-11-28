var locaisDeHospedagem = [
    { nome: 'Hotel Willisau', lat: -22.442669, lon: -42.9825237 },
    { nome: 'Athos Hotel', lat: -22.4343485, lon: -42.9751807 },
    { nome: 'Intercity Teresópolis', lat: -22.4170021, lon: -42.9748386 }
];

var map = L.map('map').setView([ -22.4343485, -42.9751807], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

locaisDeHospedagem.forEach(function(local) {
    var marker = L.marker([local.lat, local.lon]).addTo(map);
    marker.bindPopup(`<b>${local.nome}</b><br>Coordenadas: ${local.lat}, ${local.lon}`).openPopup();
});