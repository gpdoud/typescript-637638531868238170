class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string, age: number, email: string, bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    print(): void {
        console.log(this.name, "|", this.age, "|", this.email, "|", this.bff);
    }
}

let f1 = new Friend("Alice", 29, "alice@friend.com", true);
let f2 = new Friend("Bill", 31, "bill@friend.com", false);
let f3 = new Friend("Carol", 35, "carol@friend.com", false);
let f4 = new Friend("Daniel", 27, "daniel@friend.com", true);
let f5 = new Friend("Erin", 33, "erin@friend.com", false);

let friends: Friend[] = [
    f1, f2, f3, f4, f5
];

for(let f of friends) {
    f.print();
}