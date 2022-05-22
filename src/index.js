//NEW IDEAS: Increase width in javascript, so elements will appear more dinamicly
import './style.css';

import { callback, options, observer } from './opacTransform.js'



let target = document.querySelectorAll('.content-section');
let ilustration = document.querySelector('#main-ilustration');



//old js project
let toTransform = [...target];

console.log(toTransform)


toTransform.forEach(element => {
    observer.observe(element)
});


//observer.observe(toTransform)

//setTimeout(observer.observe(target), 2000)










/*


mainSection.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        game.gameStart(button.id);
    });
});




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

//code wars challenge
let sum = (array) => {
    let result = 0;
    for (let theSum of array) {
        result = result + theSum;

    }
    return result;
}

function solution(number) {
    let result = [];
    for (i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result.push(i);
        }
    } return sum(result)
}

console.log(solution(10));

*/


/*var countOperations = function (num1, num2) {

    while (num1 <= 0 || num2 <= 0) {
        if (num2 >= num1) {
            num2 = num2 - num1;
            counter++
            countOperations(num1, num2);
        }
        if (num1 >= num2) {
            num1 = num2 - num1;
            counter++
            countOperations(num1, num2);
        }
        return counter
    }
};


var twoSum = function (nums, target) {
    let fltArray = nums.filter(numbers => numbers < target);
    let counter = [];
    for (i = 0; i < fltArray.length; i++) {
        fltArray.forEach((value) => {
            if (value != fltArray[i]) {
                if (value + fltArray[i] === target) {
                    counter = value + fltArray[i];
                    counter = ([nums.indexOf(value), (nums.indexOf(fltArray[i]))]);

                }
            }



        });

    }
    if (counter.length < 1) {
        let results = nums.indexOf(target / 2);
        while (results != -1) {
            counter.push(results);
            results = nums.indexOf(target / 2, results + 1);

        }

    }
    return counter


};
console.log(twoSum([4, 3, 1, 2], 6));
console.log(twoSum([5, 1, 3, 4, 5, 8], 10));
*/


///

