
let form = document.querySelector("form")
let email = document.querySelector("#email")
let name = document.querySelector("#name")
let username = document.querySelector("#username")
let age = document.querySelector("#age")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
    try {
        let res = await axios.post("http://localhost:3000/users", {
          email: email.value,    
          name: name.value,
          username: username.value,
          age: age.value,
          photo_url: ""
          });
    } catch (error) {
      
      console.log(error)
    }
  form.reset()

})
