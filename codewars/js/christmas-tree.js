function christmasTree(height) {
  return new Array(height).fill('*').map((x, i) => `${' '.repeat(height - i - 1)}${x.repeat(i * 2 + 1)}${' '.repeat(height - i - 1)}`).join('\n')
}


const { assert } = require("chai")

describe("Christmas tree", function () {
  it("should return correct christmas tree for height 0", function () {
    assert.strictEqual(JSON.stringify(christmasTree(0)), "\"\"");
  });
  it("should return correct christmas tree for height 1", function () {
    assert.strictEqual(JSON.stringify(christmasTree(1)), "\"*\"");
  });
  it("should return correct christmas tree for height 2", function () {
    assert.strictEqual(JSON.stringify(christmasTree(2)), "\" * \\n***\"");
  });
  it("should return correct christmas tree for height 3", function () {
    assert.strictEqual(JSON.stringify(christmasTree(3)), "\"  *  \\n *** \\n*****\"");
  });
  it("should return correct christmas tree for height 4", function () {
    assert.strictEqual(JSON.stringify(christmasTree(4)), "\"   *   \\n  ***  \\n ***** \\n*******\"");
  });
  it("should return correct christmas tree for height 5", function () {
    assert.strictEqual(JSON.stringify(christmasTree(5)), "\"    *    \\n   ***   \\n  *****  \\n ******* \\n*********\"");
  });
  it("should return correct christmas tree for height 6", function () {
    assert.strictEqual(JSON.stringify(christmasTree(6)), "\"     *     \\n    ***    \\n   *****   \\n  *******  \\n ********* \\n***********\"");
  });
  it("should return correct christmas tree for height 7", function () {
    assert.strictEqual(JSON.stringify(christmasTree(7)), "\"      *      \\n     ***     \\n    *****    \\n   *******   \\n  *********  \\n *********** \\n*************\"");
  });
  it("should return correct christmas tree for height 8", function () {
    assert.strictEqual(JSON.stringify(christmasTree(8)), "\"       *       \\n      ***      \\n     *****     \\n    *******    \\n   *********   \\n  ***********  \\n ************* \\n***************\"");
  });
  it("should return correct christmas tree for height 9", function () {
    assert.strictEqual(JSON.stringify(christmasTree(9)), "\"        *        \\n       ***       \\n      *****      \\n     *******     \\n    *********    \\n   ***********   \\n  *************  \\n *************** \\n*****************\"");
  });
  it("should return correct christmas tree for height 10", function () {
    assert.strictEqual(JSON.stringify(christmasTree(10)), "\"         *         \\n        ***        \\n       *****       \\n      *******      \\n     *********     \\n    ***********    \\n   *************   \\n  ***************  \\n ***************** \\n*******************\"");
  });
});
