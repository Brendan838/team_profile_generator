const Engineer = require("../lib/engineer")


describe('engineer', () => {

const test = new Engineer("Brendan", "123", "Brendan838@gmail.com", "Brendan838");

  it(`should return the type`, () => {
    expect(test.type).toEqual('Engineer')
  });

it(`should return the name put in the first parameter above`, () => {
    expect(test.name).toEqual('Brendan')
  });

it(`should return the id put in the second parameter above`, () => {
    expect(test.id).toEqual('123')
  });

it(`should return the email put in the third parameter above`, () => {
    expect(test.email).toEqual('Brendan838@gmail.com')
  });

it(`should return the Github username put in the fourth parameter above`, () => {
    expect(test.github).toEqual('Brendan838')
  });


});