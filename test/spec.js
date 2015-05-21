// ----- dependencies
// ---------------------------------------
require('blanket')({
    pattern: function (filename) {
        return !/node_modules/.test(filename);
    }
});

var expect = require('chai').expect;
var zip = require('../index.js');


// ----- tests
// ---------------------------------------
describe('byState', function() {

	it('should return zip codes for any state', function() {

		var nv = zip('NV');

		expect(nv).to.be.an('array');
		expect(nv[0]).to.be.an('object');
		expect(nv[0].latitude).to.be.a('number');
		expect(nv[0].longitude).to.be.a('number');
		expect(nv[0].cityState).to.be.a('string');
		expect(nv[0].zip).to.be.a('string');

	});

});