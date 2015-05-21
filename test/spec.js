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
describe('Zipcodes by State', function() {

	it('should return zip codes for any state', function() {

		var nv = zip('NV');

		expect(nv).to.be.an('array');
		expect(nv[0]).to.be.an('object');
		expect(nv[0].latitude).to.be.a('number');
		expect(nv[0].longitude).to.be.a('number');
		expect(nv[0].city).to.be.a('string');
		expect(nv[0].state).to.be.a('string');
		expect(nv[0].cityState).to.be.a('string');
		expect(nv[0].cityState).to.include(',')
		expect(nv[0].zip).to.be.a('string');

	});

	it('should work for territories', function() {

		it('does not work for guam', function() {
			var guam = zip('GU');
			expect(guam.length).to.equal(0);
		});

		it('does not work for samoa', function() {
			var samoa = zip('AS');
			expect(samoa.length).to.equal(0);
		});

		it('does not work for mariana islands', function() {
			var mariana = zip('MP');
			expect(mariana.length).to.equal(0);
		});

		var puertoRico = zip('PR');
		expect(puertoRico).to.be.an('array');
		expect(puertoRico.length).to.be.at.least(10);

		it('does not work for US minor outlying islands', function() {
			var islands = zip('UM');
			expect(islands.length).to.equal(0);
		});

		var virgin = zip('VI');
		expect(virgin).to.be.an('array');
		expect(virgin.length).to.be.at.least(10);

		var dc = zip('DC');
		expect(dc).to.be.an('array');
		expect(dc.length).to.be.at.least(10);

	});

});