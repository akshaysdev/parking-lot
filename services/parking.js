module.exports = class Parking {
  constructor() {
    this.slots = null;
  }

  createSlots(size) {
    this.slots = new Array(size).fill({ registration: '', age: 0, isAvailable: true }, 0, size);

    return `Create a parking lot of ${this.slots.length} slots`;
  }

  parkVehicle(registration, age) {
    let nearestSlot;

    for (let slot = 0; slot < this.slots.length; slot++) {
      console.log(slot);
      if (this.slots[slot].isAvailable) {
        nearestSlot = slot;
        break;
      }
    }
    console.log(nearestSlot);
    console.log(this.slots);

    if (nearestSlot + 1 > 0) {
      this.slots[nearestSlot].registration = registration;
      this.slots[nearestSlot].age = age;
      this.slots[nearestSlot].isAvailable = false;
    }

    return `Car with vehicle registration number ${registration} has been parked at slot number ${nearestSlot + 1}`;
  }

  leaveSlot(slot) {
    const registration = this.slots[slot - 1].registration;
    const age = this.slots[slot - 1].age;

    this.slots[slot - 1].registration = '';
    this.slots[slot - 1].age = '';
    this.slots[slot - 1].isAvailable = true;

    return `Slot number ${slot} vacated, the car with vehicle registration number ${registration} left the space, the driver of the car was of age ${age}`;
  }
}