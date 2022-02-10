
let sayHello = (name) => {
    let phrase = `Hello ${name}`;
    say(phrase);
}
<<<<<<< HEAD
getElementbyId('div');

//love today, it was nice, didn't get to study though, well.. We will be fixing that tomorrow mornign
=======

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
>>>>>>> stage
