module.exports = class Parking {
  constructor() {
    this.slots = null;
  }

  /**
   * It creates an array of objects with the length of the size parameter passed to it
   * @param size - The number of slots to create
   * @returns A string with total created slots
   */
  createSlots(size) {
    if (size < 1) return 'Invalid size';

    this.slots = Array(size).fill({ registration: '', age: 0, isAvailable: true }, 0, size);

    return `Create a parking lot of ${this.slots.length} slots`;
  }

  /**
   * It takes in a registration number and age of a car and returns a message saying the car has been
   * parked at a particular slot number
   * @param registration - The vehicle registration number
   * @param age - The age of the car
   * @returns The string with vehicle registration number and slot number
   */
  parkVehicle(registration, age) {
    if (registration === '' || age <= 0) return 'Invalid details provided to park the vehicle';

    let nearestSlot;

    for (let slot = 0; slot < this.slots.length; slot++) {
      if (this.slots[slot].isAvailable) {
        nearestSlot = slot;
        break;
      }
    }
    
    if (nearestSlot + 1 > 0) {
      this.slots[nearestSlot] = { registration, age, isAvailable: false };
    }

    return `Car with vehicle registration number ${registration} has been parked at slot number ${nearestSlot + 1}`;
  }

  /**
   * It takes a slot number as an argument, and returns a string that says the slot number vacated, the
   * car with vehicle registration number left the space, the driver of the car was of age
   * @param slot - The slot number of the car that needs to be vacated.
   * @returns a string with the slot number, registration number and age of the driver.
   */
  leaveSlot(slot) {
    if (slot < 1 || slot > this.slots.length) return 'Invalid slot number';

    const registration = this.slots[slot - 1].registration;
    const age = this.slots[slot - 1].age;

    this.slots[slot - 1] = { registration: '', age: 0, isAvailable: true };

    return `Slot number ${slot} vacated, the car with vehicle registration number ${registration} left the space, the driver of the car was of age ${age}`;
  }

  /**
   * It takes an age as an argument and returns a string of the slots that are available for that age
   * @param age - The age of the slots you want to find.
   * @returns The slots that have the same age as the age passed in.
   */
  slotsNumberOfAge(age) {
    let slots = [];

    for (let slot = 0; slot < this.slots.length; slot++) {
      if (this.slots[slot].age === age) {
        slots.push(slot + 1);
      }
    }

    return slots.join(', ');
  }

  /**
   * It returns the slot number of the vehicle with the given registration number
   * @param registration - The registration number of the vehicle.
   * @returns The slot number of the vehicle with the given registration number.
   */
  slotNumberOfVehicleNumber(registration) {
    let slot = 0, isFound = false;

    for (slot; slot < this.slots.length; slot++) {
      if (this.slots[slot].registration === registration) {
        isFound = true;
        break;
      }
    }

    return isFound ? slot + 1 : ' ';
  }

  /**
   * It takes in an age, and returns a string of all the registrations of vehicles that are that age
   * @param age - The age of the vehicle.
   * @returns The registration numbers of all the vehicles that are parked in the parking lot.
   */
  vehicleNumber(age) {
    let registrations = [];

    for (let slot = 0; slot < this.slots.length; slot++) {
      if (this.slots[slot].age === age) {
        registrations.push(this.slots[slot].registration);
      }
    }

    return registrations.length ? registrations.join(', ') : ' ';
  }
};
