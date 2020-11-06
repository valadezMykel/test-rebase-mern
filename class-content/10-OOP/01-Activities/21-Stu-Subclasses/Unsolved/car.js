let vehicle = require("./vehicle");

class　car extends vehicle {
    constructor(color, passenger) {
        this.color = color;
        this.passenger = passenger;

        const sound = "meep meep";
        const numWheels = 4;
        const id = "car";

        super(id, numWheels, sound);

    }
    checkPassengers(){
        if(this.passenger > 4){
            console.log("There are too many people in this car");
        };
    }
    useHorn(){console.log(this.sound)};
}