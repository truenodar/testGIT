// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerHTML = "Patito";
p.innerText = "Texto cambiado";
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('class', 'verde');
h1.classList.add('title');
h1.classList.remove('verde');
h1.classList.toggle('azul'); // agrega o quita dependiendo si lo tiene o no
h1.classList.contains('azul'); // valida si lo tiene o no

input.value= "dario";

const img = document.createElement('img');
img.setAttribute('src','https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png');
pid.append(img);