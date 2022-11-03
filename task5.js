class ElectricalDevice {
    constructor(name, vendor, power){
      this.name = name;
      this.vendor = vendor
      this.power = power;
      this.isPlugged = false;
    }

    plugIn() {
      console.log(this.name + " is plugged!");
      this.isPlugged = true;
    }

    unplug() {
      console.log(this.name + " is unplugged!");
      this.isPlugged = false;
    }

    getInfo() {
        console.log(`Электроприбор '${this.name}', производитель - ${this.vendor}, мощность - ${this.power} Вт`)
    }
  }
  
  class Lamp extends ElectricalDevice {
    constructor (name, vendor, power, bulbType) {
      super(name, vendor, power);
      this.bulbType = bulbType;
      this.isPlugged = true;
    }
  }
  
  class Computer extends ElectricalDevice {
    constructor(name, vendor, power, type, functionality) {
      super(name, vendor, power); 
      this.type = type;
      this.functionality = functionality;
      this.isPlugged = false;
    }
  }

  class Fridge extends ElectricalDevice {
    constructor(name, vendor, power, color, temperatureRange) {
      super(name, vendor, power); 
      this.color = color;
      this.temperatureRange = temperatureRange;
      this.isPlugged = true;
    }

    getInfo() {
        console.log(`'${this.name}', производитель - ${this.vendor}, мощность - ${this.power} Вт, цвет ${this.color}, диапазон температур  от ${this.temperatureRange[0]} до ${this.temperatureRange[1]}`)
    }
  }
  

  const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
  const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");
  const fridge = new Fridge("two-chamber refrigerator", "LG", 220, "silver", [-24, 8]);
  
  tableLamp.unplug();
  tableLamp.getInfo();
  homePC.plugIn();
  fridge.getInfo();
  