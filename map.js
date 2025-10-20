// (OpenStreetMap)
const osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});

//  (ESRI World Imagery)
const satelliteLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maxZoom: 19,
        attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer">ArcGIS</a>'
    }),
    visible: false 
});

const map = new ol.Map({
    target: 'map',
    layers: [osmLayer, satelliteLayer], 
    view: new ol.View({
        center: ol.proj.fromLonLat([35, 39]), 
        zoom: 6
    })
});

const places = [
        {
        coords: [ 32.818068273015456, 39.80724147568468], // Ankara, Gölbaşı
        name: 'Ankara - Gölbaşı TM',
        description: 'Visited to observe the regional energy infrastructure and conduct power line inspections with a thermal drone.',
        image: "images/Map/gölbaşıtm.png"
    },
    {
        coords: [ 29.39692396104322, 40.90186442409968], // İstanbul, Tepeören
        name: 'İstanbul - Tepeören TM',
        description: 'Inspected modernization efforts at a high-capacity transformer station and collected data for 3D modeling via drone.',
        image: "images/Map/tepeörentm.png"
    },
    {
        coords: [30.706371964213666, 36.96023399094631], // Antalya, Varsak
        name: 'Antalya - Varsak TM',
        description: 'Participated in fieldwork at main distribution points that supply energy to tourism areas.',
        image: "images/Map/varsaktm.png"
    },
    {
        coords: [28.102287809438952, 37.33146971475743], // Muğla, Yatağan
        name: 'Muğla - Yatağan Power Plant Area',
        description: 'Inspected transmission lines around the power plant with a drone and conducted vegetation analysis.',
        image: "images/Map/yatağantermik.png"
    },
    {
        coords: [32.61068244258342, 37.975839031671775], // Konya, Selçuklu
        name: 'Konya - Organized Industrial Zone',
        description: 'Made observations for load analysis and efficiency measurements at transformer stations in the industrial zone.',
        image: "images/Map/konyaorganize.png"
    },
    {
        coords: [27.464329966111546, 37.861156804775675], // Aydın
        name: 'Aydın - Germencik Geothermal Area',
        description: 'Conducted drone surveys to monitor the impact of geothermal power plants on the surrounding energy grid.',
        image: "images/Map/germencikjeotermal.png"
    },
    {
        coords: [ 27.346885940393115, 38.62470341039716], // Manisa
        name: 'Manisa - Wind Turbine Fields',
        description: 'Performed aerial inspections of wind turbine blades and transformer connections for renewable energy integration.',
    }
];

const vectorSource = new ol.source.Vector();
const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22', '#1abc9c'];

places.forEach((place, index) => {
    const iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(place.coords)),
        name: place.name,
        description: place.description,
        image: place.image
    });
    
    const iconStyle = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 8,
            fill: new ol.style.Fill({ color: colors[index % colors.length] }),
            stroke: new ol.style.Stroke({ color: 'white', width: 2 })
        })
    });

    iconFeature.setStyle(iconStyle);
    vectorSource.addFeature(iconFeature);
});

const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
});

map.addLayer(vectorLayer);

const streetBtn = document.getElementById('street-view-btn');
const satelliteBtn = document.getElementById('satellite-view-btn');

streetBtn.addEventListener('click', () => {
    osmLayer.setVisible(true);
    satelliteLayer.setVisible(false);
    streetBtn.classList.add('active');
    satelliteBtn.classList.remove('active');
});

satelliteBtn.addEventListener('click', () => {
    osmLayer.setVisible(false);
    satelliteLayer.setVisible(true);
    streetBtn.classList.remove('active');
    satelliteBtn.classList.add('active');
});

const container = document.getElementById('popup');
const content_element = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

const overlay = new ol.Overlay({
    element: container,
    autoPan: {
        animation: {
            duration: 250,
        },
    },
});
map.addOverlay(overlay);

closer.onclick = function () {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};

map.on('click', function (evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
    });

    if (feature && feature.get('name')) { 
        const coordinates = feature.getGeometry().getCoordinates();
        const name = feature.get('name');
        const description = feature.get('description');
        const image = feature.get('image');

        content_element.innerHTML = `
            <h4>${name}</h4>
            <img src="${image}" alt="${name}">
            <p>${description}</p>
        `;
        overlay.setPosition(coordinates);
    } else {
        overlay.setPosition(undefined);
        closer.blur();
    }
});