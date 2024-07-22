let openbtn = document.getElementById("btn1");
console.log(openbtn);
let contanier = document.getElementById('container');
let closebtn = document.getElementById('close-btn');
let body = document.querySelector('body');

console.log(body);
console.log(contanier);
openbtn.addEventListener('click',function(){
    contanier.style.display = 'block';

});

closebtn.addEventListener('click',function(){
    contanier.style.display = 'none';
});

window.addEventListener('click',function(e){
    if (e.target === body){
        contanier.style.display = 'none';
    }
});
