// Write your code below:

function handleFormSubmit(event) {
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);
  }
  
  module.exports = handleFormSubmit;