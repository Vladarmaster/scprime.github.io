// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#586EC6");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#2B4BC9");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Add some data
polygonSeries.data = [{
  "id": "US",
  "name": "United States",
  "value": 100,
  "fill": am4core.color("#586EC6")
}, {
  "id": "FR",
  "name": "France",
  "value": 50,
  "fill": am4core.color("#586EC6")
}];

// Bind "fill" property to "fill" key in data
polygonTemplate.propertyFields.fill = "fill";

// Create image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 5;
circle.fill = am4core.color("#00CE15");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;
circle.tooltipText = "{title}";

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";



// Add data for the three cities
imageSeries.data = [{
  "latitude": 38.2081,
  "longitude": -91.1604,
  "title": "shawnhomesc.no-ip.org:4282"
}, {
  "latitude": 38.6491,
  "longitude": -90.5358,
  "title": "47.47.44.38:4282"
}, {
  "latitude": 38.6491,
  "longitude": -90.5358,
  "title": "24.182.159.234:4282"
 
 }, {
  "latitude": 43.3247,
  "longitude": 21.9033,
  "title": "vmaster.hopto.org:4282"
  
  }, {
  "latitude": 47.3667,
  "longitude": 8.5500,
  "title": "siaprime.kabal.se:4282"
   }, {
  "latitude": 58.9608,
  "longitude": 5.7546,
  "title": "92.221.99.217:4282"
   }, {
  "latitude": 51.0262,
  "longitude": 11.5164,
  "title": "linmedia.selfhost.eu:4282"
  }, {
  "latitude": 51.0262,
  "longitude": 11.5164,
  "title": "linmedia.selfhost.eu:4282"
  }, {
  "latitude": 56.9460,
  "longitude": 24.1059,
  "title": "195.130.205.91:4282"
  }, {
  "latitude": 40.3540,
  "longitude": -92.7065,
  "title": "siaprime.carpenter-farms.us:4285"
  }, {
  "latitude": -37.7919,
  "longitude": 144.9311,
  "title": "prime.kingsley-muir.com:4282"
  }, {
  "latitude": 28.1147,
  "longitude": -82.3678,
  "title": "prime-host-01.mooo.com:4290"
  }, {
  "latitude": 41.9831,
  "longitude": 2.8249,
  "title": "itsprimetimev2.duckdns.org:4282"
   }, {
  "latitude": 51.5477,
  "longitude": -0.1723,
  "title": "212.105.168.207:4282"
  
   
}];
  
