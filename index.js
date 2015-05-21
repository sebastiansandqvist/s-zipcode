'use strict';

var dump = require('./zip_dump.json');

// ----- get zip codes in state with lat/long info
//		--	@param state {String} shortcode for US state / territory
//		--	@return {Array} of objects (zip codes w/ coordinates in state)
// ---------------------------------------
module.exports = function(state) {

	// get zip codes in given state
	var zipsInState = [];

	for (var i = 0; i < dump.length; i++) {

		if (dump[i].state === state) {
			zipsInState.push(dump[i]);
		}

	}

	// format zip codes
	var formattedZips = [];

	for (var j = 0; j < zipsInState.length; j++) {

		var current = {
			latitude: parseFloat(zipsInState[j].latitude),
			longitude: parseFloat(zipsInState[j].longitude),
			cityState: zipsInState[j].city + ', ' + zipsInState[j].state,
			zip: zipsInState[j].zip
		};

		formattedZips.push(current);

	}

	return formattedZips;

};