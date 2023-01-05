const progressDays = require("./progressDays.js");

describe("should receave a array with progress days of johnny and return or progress", () => {
  it("should return 2", () => {
    expect(progressDays([3, 4, 1, 2])).toEqual(2);
  });

  it("should return 3", () => {
    expect(progressDays([10, 11, 12, 9, 10])).toEqual(3);
  });

  it("should return 1", () => {
    expect(progressDays([6, 5, 4, 3, 2, 9])).toEqual(1);
  });

  it("should return 0", () => {
    expect(progressDays([9, 9])).toEqual(0);
  });
});
