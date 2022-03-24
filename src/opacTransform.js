
let callback = (entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('bit-bigger')

            console.log(entry.target);
            console.log(entries);

            //target.classList.add('bit-bigger')

            return console.log('I can see you')

        }
        if (!entry.isIntersecting) {
            entry.target.classList.add('hiden');
            return

        }

    })
}


let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
}
let observer = new IntersectionObserver(callback, options);


export { callback, options, observer }
