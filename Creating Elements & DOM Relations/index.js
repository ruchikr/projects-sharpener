const subheading=document.createElement('h3');
const subheadingText=document.createTextNode('Buy high quality organic fruits online');
subheading.style.fontStyle='italic';
subheading.appendChild(subheadingText);
console.log(subheading);
const Divs=document.getElementsByTagName('div');
const firstDiv=Divs[0];
firstDiv.appendChild(subheading);

const para=document.createElement('p');
const paraText=document.createTextNode('Total fruits:4');
para.appendChild(paraText);
console.log(para);
const secondDiv=Divs[1];
secondDiv.appendChild(para);

const fruits=document.querySelector('.fruits');
secondDiv.insertBefore(para,fruits);

para.id='fruits-total';
console.log(para);