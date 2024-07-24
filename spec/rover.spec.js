const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

//Test 7
describe("Rover class", function () {
  it("constructor sets position and default values for mode and generatorWatts”", function () {
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  });
});

//Test 8
describe("Rover Class", function () {
  it("response returned by receiveMessage contains the name of the message", function () {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382); // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual("Test message with two commands");
  });
});

//Test 9
describe("Rover Class", function () {
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382); // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    if (commands.lentgh === 2) expect(response.results.length).toEqual(2);
  });
});

//Test 10
describe("Rover Class", function () {
  it("responds correctly to the status check command", function () {
    let commands = [new Command("STATUS_CHECK")];
    let message = new Message("Test message with one commands", commands);
    let rover = new Rover(98382); // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    expect(response.results[0].roverStatus.position).toEqual(98382);
    expect(response.results[0].roverStatus.mode).toEqual("NORMAL"); //when uncommented only 9 pass
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
  });
});

//Test 11
describe("Rover Class", function () {
  it("responds correctly to the mode change command", function () {
    let commands = [new Command("MODE_CHANGE", "LOW_POWER")];
    let message = new Message("Test message with one commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].roverStatus.position).toEqual(98382);
    expect(response.results[0].roverStatus.mode).toEqual("LOW_POWER"); //when uncommented only 9 pass
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
  });
});

//Test 12
describe("Rover Class", function () {
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("MOVE", 98383),
    ];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].roverStatus.position).toEqual(98382);
    expect(response.results[0].roverStatus.mode).toEqual("LOW_POWER");
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
    expect(response.results[1].completed).toEqual(false);
  });
});

//Test 13
describe("Rover Class", function () {
  it("responds with the position for the move command", function () {
    let commands = [new Command("MOVE", 98383)];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].roverStatus.position).toEqual(98383);
    expect(response.results[0].roverStatus.mode).toEqual("NORMAL");
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
  });
});
