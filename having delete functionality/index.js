// Write your code below:

function handleFormSubmit(event){

    event.preventDefault();

    let myObj = {
        username : event.target.username.value,
        email : event.target.email.value,
        phone : event.target.phone.value
    };

    let myObj_serial = JSON.stringify(myObj);

    localStorage.setItem(myObj.email, myObj_serial);

    const string = `${myObj.username} - ${myObj.email} - ${myObj.phone}`;
    
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(string);
    newLi.appendChild(newLiText);
    const list = document.querySelector("ul");
    list.appendChild(newLi);

    const deleteBtn = document.createElement('button');
    const deleteBtnText = document.createTextNode('Delete');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className = 'delete-btn';
    newLi.appendChild(deleteBtn);

    list.addEventListener('click', function(event){
      if(event.target.classList.contains('delete-btn')){
        const userToDelete = event.target.parentElement;
        userToDelete.remove();
        localStorage.removeItem(myObj.email);

      }
    })
}

module.exports = handleFormSubmit;