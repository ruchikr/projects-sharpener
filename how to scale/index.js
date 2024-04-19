function handleFormSubmit(event){

    event.preventDefault();
  
    var user = {
      username : event.target.username.value,
      email : event.target.email.value,
      phone : event.target.phone.value,
    };
  
    localStorage.setItem(user.email, JSON.stringify(user));
    
    let string = `${user.username}  ${user.email}  ${user.phone}`;
  
    const newLi = document.createElement('li');
      const newLiText = document.createTextNode(string);
      newLi.appendChild(newLiText);
      const list = document.querySelector("ul");
      list.appendChild(newLi);
  }
  
  module.exports = handleFormSubmit;