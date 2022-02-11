
let sayHello = (name) => {
    let phrase = `Hello ${name}`;
    say(phrase);
}

let say = (phrase) => {
    alert(`** ${phrase} **`);
}


//sayHello();

let user = {
    name: 'Shota',
    age: 19
};
let clone = {};
for (let key in user) {
    clone[key] = user[key];
}
for (let key in clone) {
    console.log(clone[key]);
}
//alert(clone.age);

clone = Object.assign({}, user);

let randomValue = { canWalk: true };

console.log(`${clone.name}`);
Object.assign(clone, randomValue);

let deepEqual = (firstValue, secondValue) => {
    if (firstValue === secondValue) {
        return true
    }
    return false
}
//alert(deepEqual(user, clone));
let userObj = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let cloneObj = Object.assign({}, userObj);

console.log(userObj.sizes === cloneObj.sizes); // true, same object

// user and clone share sizes
userObj.sizes.width = userObj.sizes.width + 100;       // change a property from one place
console.log(cloneObj.sizes.width); // 51, see the result from the other one
console.log(cloneObj[0]);
let a = 0;
let b = 0;
let calculator = {
    read() {
        a = parseInt(window.prompt('A'));
        b = parseInt(window.prompt('B'));
    },
    sum() {
        this.read()
        let c = a + b;
        return c
    },
    mul() {
        c = a * b;
        return c
    }
};
//console.log(calculator.sum());
//console.log(calculator.mul());

// Ladder Exercise !

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() { // shows the current step
        alert(this.step);
        return this
    }
};
//ladder.showStep();
ladder.up().up().showStep()
