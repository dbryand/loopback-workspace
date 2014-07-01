var ComponentDefinition = require('../app').models.ComponentDefinition;

describe('ComponentDefinition', function () {
  describe('ComponentDefinition.create(def, cb)', function () {
    it('should use name as the id', function (done) {
      ComponentDefinition.create({
        name: 'foo'
      }, function(err, def) {
        expect(err).to.not.exist;
        expect(def).to.not.have.property('id');
        expect(def.name).to.equal('foo');
        done();
      });
    });
  });
});
