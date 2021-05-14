const { expect } = require('chai');
const formatFullname = require('../formatFullname');

describe('FormatFullname', () => {

    it('should return an error if "formatFullname" has wrong format', () => {
        expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
        expect(formatFullname('aMANDA dOE')).to.equal('Amanda Doe');
        expect(formatFullname('AmaNda DoE')).to.equal('Amanda Doe');
        expect(formatFullname('Amanda')).to.equal('Error');
        expect(formatFullname('Amanda Doe something')).to.equal("Error");
    });

    it('should return an error if "formatFullname" is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function () { })).to.equal('Error');
    });

});