var expect = require('chai').expect;

describe('test_suite1', function() {
	before('setup code', function(){
		console.log('Setup code');
	});

	after('teardown code', function () {
		console.log('Teardown code');
	});

	it('test1', function () {
		console.log('test1');
		expect(true).to.equal(true);
	});
});