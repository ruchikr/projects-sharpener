// Add the Edit Button:
const listItems = document.querySelectorAll("li");
listItems.forEach(function(event) {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    event.appendChild(editBtn);
});


// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('Submit',function(event){
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');
  const newLiText = document.createTextNode(fruitToAdd.value);

  newLi.appendChild(newLiText);
  newLi.className='fruit';
  const deleteBtn = document.createElement('button');
  const deleteBtnText = document.createTextNode('x');
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className='delete-btn';
  newLi.appendChild(deleteBtn);
  const editBtn = document.createElement('button');
  const editBtnText = document.createTextNode('Edit');
  editBtn.appendChild(editBtnText);
  editBtn.className='edit-btn';
  newLi.appendChild(editBtn);
  
  fruits.appendChild(newLi);
});
fruits.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruitToDelete=event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  };
});

