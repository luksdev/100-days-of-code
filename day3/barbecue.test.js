const barbecueSkewers = require("./barbecue.js");

describe("should receave a array with barbecue skewers and return when is vegan", () => {
  it("should return [1,4]", () => {
    expect(
      barbecueSkewers([
        "--xo--x--ox--",
        "--xx--x--xx--",
        "--oo--o--oo--",
        "--xx--x--ox--",
        "--xx--x--ox--",
      ])
    ).toEqual([1, 4]);
  });

  it("should return [2, 3]", () => {
    expect(
      barbecueSkewers([
        "--oooo-ooo--",
        "--xx--x--xx--",
        "--oo--o--oo--",
        "--xx--x--ox--",
        "--xx--x--ox--",
      ])
    ).toEqual([2, 3]);
  });

  it("should return [3, 2]", () => {
    expect(
      barbecueSkewers([
        "--oooo-ooo--",
        "--xxxxxxxx--",
        "--o---",
        "-o-----o---x--",
        "--o---o-----"
      ]
    )).toEqual([3, 2]);
  });
});
