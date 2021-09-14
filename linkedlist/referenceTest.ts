class Home {
    private address: string;
    constructor(address: string) {
        this.address = address;
    }
}

class Person {
    private name: string;
    private age: number;

    private home: Home;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public setHome(home: Home) { this.home = home; }
}