const Manager = require("../lib/manager")

describe('manager', () => {

const test = new Manager("Brendan", "123", "Brendan838@gmail.com", "456");

  it(`should return the type`, () => {
    expect(test.type).toEqual('Manager')
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

it(`should return the office number put in the fourth parameter above`, () => {
    expect(test.officeNumber).toEqual('456')
  });


});