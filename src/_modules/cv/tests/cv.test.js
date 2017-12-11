'use strict';

var Cv = require('../cv');

describe('Cv View', function() {

  beforeEach(function() {
    this.cv = new Cv();
  });

  it('Should run a few assertions', function() {
    expect(this.cv);
  });

});
