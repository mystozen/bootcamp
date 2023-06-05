function runActivity() {
  class Car {
    constructor(name, manufacturer, acceleration) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.acceleration = acceleration;
      this.speed = 0;
    }

    start() {
      if (this.speed == 0) {
        this.speed = 30;
        console.log(
          "This car " +
            this.name +
            " is now started with the acceleration speed of " +
            this.speed +
            "."
        );
      } else {
        console.error("The car is already started.");
      }
    }
    accelerate() {
      if (this.speed > 0) {
        this.speed += this.acceleration;
        console.log(
          "The car has been accelerated with the speed of " + this.speed + "."
        );
      } else {
        console.error("The car needs to be started first.");
      }
    }
    decelerate() {
      if (this.speed > 0) {
        this.speed /= 2;
        if (this.speed < 1) {
          this.speed = 1;
          console.log("The current speed is " + this.speed + ".");
        } else {
          console.log(
            "The car has been decelerated to " + this.speed + " current speed."
          );
        }
      } else {
        console.error("The car needs to be started");
      }
    }
    checkspeed() {
      console.log("The current speed is " + this.speed + " .");
    }
    stop() {
      if (this.speed > 0) {
        this.speed = 0;
        console.log(
          "The car has been stopped current speed is now " + this.speed + "."
        );
      } else {
        console.error("The car needs to be started.");
      }
    }
  }
  let name = prompt("Give a car name.");

  let manufacturer = prompt("Give the name of the manufacturer.");

  let acceleration = Number(prompt("Give the speed of a car."));
  if (acceleration > 0) {
    let car1 = new Car(name, manufacturer, acceleration);

    let i = true;
    while (i) {
      let choice = Number(
        prompt(
          "(1) Start \n (2) Accelerate \n (3) Decelerate \n (4) Check Speed \n (5) Stop"
        )
      );
      switch (choice) {
        case 1:
          car1.start();
          break;
        case 2:
          car1.accelerate();
          break;
        case 3:
          car1.decelerate();
          break;
        case 4:
          car1.checkspeed();
          break;
        case 5:
          car1.stop();
          break;
        case 6:
          console.log("Exiting program");
          i = false;
          break;
      }
    }
  } else {
    console.error("acceleration must be greater than 0!");
  }
}
