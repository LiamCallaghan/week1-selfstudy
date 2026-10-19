interface Participant {
    name: string;
    age: number;
    email?: string;
    hobbies: string[];
    hasDriversLicense: boolean;
}

const Liam: Participant = {
    name: "Liam",
    age: 28,
    hobbies: ["reading", "skiing", "gaming"],
    hasDriversLicense: true,
};

function introduce(participant: Participant): string {
    return `Hello, my name is ${participant.name} and I am ${participant.age}! My hobbies are: ${participant.hobbies.join(", ")}.`;
}

console.log(introduce(Liam));