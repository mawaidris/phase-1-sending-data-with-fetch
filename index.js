// Add your code here
const formData = {
    name: "Steve",
    email: "steve@steve.com",
  };
 const submitData = (name,email) => {
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData)};
        fetch("http://localhost:3000/users", configurationObject)
        .then( (response) => response.json())
          .then(data =>document.body.innerHTML = data.id)
          .catch(error => document.body.innerHTML = error.message)
          ;
 }

 