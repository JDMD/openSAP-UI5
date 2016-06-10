sap.ui.define([], function() {
	"use strict";

	return function(sHouseNumber, sStreet, sCity, sCountry) {
		var url = "https://maps.googleapis.com/maps/api/staticmap?";
		//size
		url += "size=600x600";
		//zoom
		url += "&zoom=15";
		//specify location
		var location = sHouseNumber + "," + sStreet + "," + sCity + "," + sCountry;
		url += "&markers=size:mid|color:red|" + $.sap.encodeURL(location);

		return url;

	};
});