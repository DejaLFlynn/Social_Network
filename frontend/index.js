
  let button = document.querySelector(".signIn");
  let form = document.querySelector("#form");

  form.addEventListener("submit", (event) => {
    // event.preventDefault();
    let username = document.querySelector("#username").value;
    sessionStorage.setItem("currentUser", username);
    

  })

  const getUserLogin = async () => {
    try {
      let user = await axios.get(`https://`)
    } catch (err) {
      
    }
  }
  
  // button.addEventListener("onclick")
  

  // Set sessionStorage with form values
  // Check user exists - Get on database
  // If Does not exist - hvae fucntion that creates a div "user does not exist"
  // button on click - takes you to home page
  
