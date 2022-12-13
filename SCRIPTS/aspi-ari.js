
//Global Variables
const primeNav = document.querySelector("#prime-nav");
const footNav = document.querySelector('#footer-nav');
const nav = {
    heading: ['Career', 'Lifestyle', 'Beauty', 'About', 'Contact'],
    anchor: ['career.html', 'lifestyle.html', 'beauty.html', 'about.html', 'contact.html'],
};

//build navigation dynamically
for (let i=0; i<nav.heading.length; i++) {
    const newLi = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', nav.anchor[i]);
    anchor.innerHTML = nav.heading[i];
    newLi.append(anchor);
    primeNav.append(newLi);
};
//build footer site-map dynamically
for (let i=0; i<nav.heading.length; i++) {
    const newLi = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', nav.anchor[i]);
    anchor.innerHTML = nav.heading[i];
    newLi.append(anchor);
    footNav.append(newLi);
    }
    

    