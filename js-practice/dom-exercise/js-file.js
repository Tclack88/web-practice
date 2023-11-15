const container = document.querySelector('#container');

const para1 = document.createElement('p');
para1.textContent = "Hey I'm red!";
para1.setAttribute('style', "color: red;");
container.appendChild(para1);


const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.setAttribute('style', 'color:blue;');
container.appendChild(h3);

const newDiv = document.createElement('div');
newDiv.setAttribute('style','border:black 5px solid; background-color:pink;');
container.appendChild(newDiv);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";

newDiv.appendChild(h1);
newDiv.appendChild(para2);