//TODO: test async 
describe("teletransport", function() {

    it("triggers start event", function() {

      var ascensor = getInstanceOfAscensor();
      var spyEventStart = spyOnEvent(ascensor, 'teletransportStart');
      //var spyEventEnd = spyOnEvent(ascensor, 'teletransportEnd');

      ascensor.trigger("teletransportToFloor", 1);

      expect(spyEventStart).toHaveBeenTriggered();
      //expect(spyEventEnd).toHaveBeenTriggered();
    });

    it("return correct floor attribute", function() {
      var floorFrom;
      var floorTo;
      var ascensor = getInstanceOfAscensor();
      var spyEvent = spyOnEvent(ascensor, 'teletransportStart');
      ascensor.on("teletransportStart", function(event, floor) {
        floorFrom = floor.from;
        floorTo = floor.to;
      });
      ascensor.trigger("teletransportToFloor", 1);
      expect(floorFrom).toBe(0);
      expect(floorTo).toBe(1);
    });

    it("does not fire events if floor doesn't exist", function() {

      var ascensor = getInstanceOfAscensor();
      var spyEventStart = spyOnEvent(ascensor, 'teletransportStart');
      // var spyEventEnd = spyOnEvent(ascensor, 'teletransportEnd');

      ascensor.trigger("teletransportToFloor", 99999999);

      expect(spyEventStart).not.toHaveBeenTriggered();
      //expect(spyEventEnd).not.toHaveBeenTriggered();
    });
    
    // it("does not change floor if it doesn't exist", function() {
    // });

    //  it("changes the floor if it exist", function() {
    //   var floorTo = 2;
    //   var ascensor = getInstanceOfAscensor();
    //   var currentFloorBefore = ascensor.data('current-floor');
    //   var currentFloorAfter;
    //   ascensor.on("teletransportEnd", function(event, floor) {
    //     currentFloorAfter = ascensor.data('current-floor');
    //   });
    //   ascensor.trigger("teletransportToFloor", floorTo);
    //   expect(currentFloorAfter).toNotEqual(currentFloorBefore);
    //   expect(currentFloorAfter).toNotEqual(floorTo);
    // });

});
