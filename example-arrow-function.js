var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function (name){
    console.log('forEach', name);
});

// For multiple lines
names.forEach((name) => {
    console.log('arrowFunction', name)
});

// For single line
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('Andrew'));

// Anonymous function change the this binding while arrow function takes its parent
// this binding

var person = {
    name: 'Andrew',
    greet: function() {
        names.forEach(function (name) {
            console.log(this.name + ' says hi to ' + name)
        });
    }
};

person.greet();


var personArrow = {
    name: 'Andrew',
    greet: function() {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name)
        });
    }
};

personArrow.greet();

// Challenge area

function add (a, b) {
    return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
    return a + b
};

console.log(addStatement(1, 3));
console.log(addStatement(9, 0));

var addExpression = (a, b) => a + b;

console.log(addExpression(1, 3));
console.log(addExpression(9, 0));
