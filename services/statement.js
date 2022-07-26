const { command, index } = require('../constants');

const ParkingService = require('./parking')

module.exports = class Statement {
  constructor() {
    this.parkingService = new ParkingService();
  }

  /**
   * It takes the input from the user and splits it into an array of strings. Then it checks the first
   * element of the array and based on that it calls the appropriate function from the parking service
   * @param input - The input statement from the user.
   * @returns The return value is the output of the command.
   */
  processStatement(input) {
    const statement = input.split(' ');
    const action = statement[index.ACTION];

    switch (action) {
      case command.create_lot:
        return this.parkingService.createSlots(+statement[index.SLOT] || -1);
      case command.park_vehicle:
        return this.parkingService.parkVehicle(statement[index.REGISTERATION], +statement[index.AGE.PARK] || 0);
      case command.leave_slot:
        return this.parkingService.leaveSlot(+statement[index.SLOT] || -1);
      case command.slot_number_of_age:
        return this.parkingService.slotsNumberOfAge(+statement[index.AGE.SLOT] || 0);
      case command.slot_number_of_vehicle_number:
        return this.parkingService.slotNumberOfVehicleNumber(statement[index.REGISTERATION].trim() || '');
      case command.vehicle_number:
        return this.parkingService.vehicleNumber(+statement[index.AGE.SLOT] || 0);
      default:
        return ' ';
    }
  }
}