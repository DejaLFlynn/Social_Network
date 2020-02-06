

  
  
  // button.addEventListener("onclick")
  

  
  //let button = document.querySelector(".signIn");
  
  let form = document.querySelector("#form");
  let p = document.querySelector("#invalidLogin");
  form.addEventListener("submit", (event) => {
    p.innerHTML = "";
    event.preventDefault();
        let username = document.querySelector("#username").value;
        sessionStorage.setItem("currentUser", username);
        
    const getUserLogin = async () => {
      try {
        let res = await axios.get(`https://localhost3000/users`);
          let currentUser = res.data
          debugger
        if (username === res.data.id.username) {
          debugger
          console.log("you logged in ")
        } else {
          p.innerHTML = "Sorry invalid username try again or sign up"
          
        }
        
      } catch (err) {
        console.log(err)
      }
      form.reset();
    }
    getUserLogin()
    })
  // button.addEventListener("onclick")
  // Set sessionStorage with form values
  // Check user exists - Get on database
  // If Does not exist - hvae fucntion that creates a div "user does not exist"
  // button on click - takes you to home page