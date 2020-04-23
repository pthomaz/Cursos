import {Spacecraft, IContainership} from './base-ships'
import {MilleniumFalcon}  from './starfighters';

import * as _ from 'lodash'

console.log(_.pad("typescript Examples", 40,"="))

let ship = new Spacecraft("hyperdrive");
ship.jumpIntoHyperspace();

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace();

let goodFortheJob = (ship : IContainership) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodFortheJob(falcon)}`)