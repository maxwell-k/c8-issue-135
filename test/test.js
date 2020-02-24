const assert = require("assert");
const one = require("../main.js");

describe("Example", async function() {
  it("Showing return line not covered", async function() {
    assert.equal(1, await one());
  });
});
