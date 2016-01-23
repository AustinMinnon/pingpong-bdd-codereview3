describe('pingPong',function(){
  it("will count up to input number",function(){
    expect(pingPong(2)).to.eql([1,2]);
  })
  it("will count up to input, list all non multiples 3",function(){
    expect(pingPong(3)).to.eql([1,2,"ping"]);
  })
  it("will count up to input, list non multiples 5",function(){
    expect(pingPong(5)).to.eql([1,2,"ping",4,"pong"]);
  })
  it("will count up to input, list non multiples 15",function(){
    expect(pingPong(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong"]);
  })
});
