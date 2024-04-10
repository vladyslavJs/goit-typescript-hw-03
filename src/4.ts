// #1
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

// #2
class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

// #3
abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('A man walks into a house');  
        } else {
            console.log('The door is closed');
            
        }
    }
    abstract openDoor(key: Key): void;   
}

// #4 
class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is open. Welcome!');
        } else {
            console.log('Oops, incorrect key...');
        }
    }
}

// #5
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);