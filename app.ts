const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Adam',
    age: 21,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};

person.role.push('admin'); // Typescript does not see a problem here and will push a third value to a two value tuple
person.role = [2, 'author', 'admin'];   // Here Typescript sees the problem

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}