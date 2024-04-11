// #1 Create class key
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

// #2 Create class Person
class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    public getKey(): Key {
        return this.key;
    }
}

// #3 Create abstract class House
abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            alert('A man walks into a house');  
        } else {
            alert('The door is closed');
            
        }
    }
    abstract openDoor(key: Key): void;   
}

// #4 Create class MyHouse
class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            alert('The door is open. Welcome!');
        } else {
            alert('Oops, incorrect key...');
        }
    }
}

// #5 Running program :
//Create key
const key = new Key();

//Create house
const house = new MyHouse(key);

//Create person with Key
const person = new Person(key);

//Open door using person's key
house.openDoor(person.getKey());

//Add person to the house
house.comeIn(person);


export {}