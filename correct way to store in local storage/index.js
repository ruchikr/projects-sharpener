function handleFormSubmit(event){
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const details = {
        username : name,
        email : email,
        phone : phone
    }

    const detail = JSON.stringify(details);
    localStorage.setItem('User Details' , detail);
}
module.exports = handleFormSubmit;