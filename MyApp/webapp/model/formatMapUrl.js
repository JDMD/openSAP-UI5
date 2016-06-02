sap.ui.define([], function() {
	"use strict";

	return function(sHouseNumber, sStreet, sCity, sCountry) {
		var APIkey = "AIzaSyA0S-vo46NgtBHvgk9ZNZaAOSS0_IlZ6Vc";

		var url = "https://maps.googleapis.com/maps/api/staticmap?";
		//API key
		url += "key=" + APIkey;
		//specify location
		var location = sHouseNumber + "," + sStreet + "," + sCity + "," + sCountry;
		url += "&markers=size:mid|color:red|" + encodeURIComponent(location);
		//size
		url += "&size=600x600";
		//zoom
		url += "&zoom=15";

		return url;

	};
});