import {Spacecraft, IContainership} from './base-ships'

export class MilleniumFalcon extends Spacecraft implements IContainership{

    cargoContainers :number;

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2;
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace();
        }
        else{
            console.log(`Failed to jump into hyperspace`)
        }
    }
}