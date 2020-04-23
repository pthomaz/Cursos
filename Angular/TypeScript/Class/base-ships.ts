class Spacecraft{

    constructor (public propursor : string){};

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propursor}`)
    }
}

interface IContainership{
    //Se quiser tonar opcional, colocar um "?" na frente da propriedade
    cargoContainers : number;
}

export {Spacecraft, IContainership}