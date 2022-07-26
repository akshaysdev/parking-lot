const command = {
  create_lot: 'Create_parking_lot',
  park_vehicle: 'Park',
  slot_number_of_age: 'Slot_numbers_for_driver_of_age',
  slot_number_of_vehicle_number: 'Slot_number_for_car_with_number',
  leave_slot: 'Leave'
}

const index = {
  ACTION: 0,
  SLOT: 1,
  REGISTERATION: 1,
  AGE: {
    PARK: 3,
    SLOT: 1
  }
}

module.exports = { command, index };