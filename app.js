var person = {
    name: 'Adam',
    age: 21,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
person.role.push('admin');
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
