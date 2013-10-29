describe('true', function(){
  it('should be true', function(){
    true.should.eq(true);
  })
})

describe('stubbing', function() {
  it('is easy', function() {
    var stub = sinon.stub().returns('success');
    stub().should.eq('success');
  });
})

describe('async tests', function() {
  it('are simple to write', function(done) {
    setTimeout(function() {
      // Test something that took a while
      true.should.eq(true);

      // Just call the done() callback when your test is finished
      done();
    }, 100);
  })
})
