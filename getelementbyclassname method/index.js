const fruits = document.getElementsByClassName('fruit');
console.log(fruits[2]);
fruits[2].style.backgroundColor='yellow';

for(let i=0;i<fruits.length;i++){
  fruits[i].style.fontWeight='bold';
};