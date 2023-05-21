const animals = [{name: 'shark', size: 'big', habitat: 'water'}, {name: 'asasian dog', size: 'big', habitat: 'land'}, {name: 'cray fish', size: 'small', habitat: 'water'}];

// Reusable map function
const processArrayWithMap = (array, callback) => {
    return array.map(callback);
}

// the callback function
const aquaticAnimals = (animal) =>{
    if(animal.habitat === 'water'){
        return animal
    }
};

// Call the reusable map function, pass the array and callback
processArrayWithMap(animals, aquaticAnimal);