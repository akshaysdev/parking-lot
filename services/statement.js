const { command, index } = require('../constants');

const ParkingService = require('./parking')

module.exports = class Statement {
  constructor() {
    this.parkingService = new ParkingService();
  }

  processStatement(input) {
    const statement = input.split(' ');
    const action = statement[index.ACTION];

    switch (action) {
      case command.create_lot:
        return this.parkingService.createSlots(+statement[index.SLOT]);
      case command.park_vehicle:
        return this.parkingService.parkVehicle(statement[index.REGISTERATION], +statement[index.AGE.PARK]);
      case command.leave_slot:
        return this.parkingService.leaveSlot(+statement[index.SLOT]);
      default:
        return 'idle';
    }
  }
}