const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
//Test 4
describe("Message class", function () {
  it("throws error if command type is NOT passed into constructor as the first parameter", function () {
    expect(function () {
      new Message();
    }).toThrow(new Error("Name required."));
  });
});

//Test 5
describe("constructor sets name", function () {
  it("corectly sets name", function () {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    expect(message.name).toBe("Test message with two commands");
  });
});

//Test 6
describe("contains a commands array passed into the constructor as the 2nd argument", function () {
  it("corectly takes data from message call", function () {
    let commands = new Command("STATUS_CHECK");
    let message = new Message("Test message with two commands", commands);
    expect(message.commands.commandType).toBe("STATUS_CHECK");
  });
});
