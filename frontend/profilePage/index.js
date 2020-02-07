document.addEventListener("DOMContentLoaded", ()=> {

  const getUserHeader = async () => {
    let img = document.querySelector("#profilePic")
    let username = document.querySelector("#username")
    try {
      // let res = await axios.get(`http://localhost:3000/users/${sessionStorage.id}`)
      // username.innerText = res.data.users.username
      // img.src = res.data.users.photo_url
      let res = await axios.get(`http://localhost:3000/users/`)
      username.innerText = res.data.users[0].username
      img.src = res.data.users[0].photo_url
    } catch (error) {
      console.log(error)
    }
  }

  const getUserPosts = async () => {
    let img = document.querySelector("#postPic")
    let caption = document.querySelector("#caption")
    try {
      let res = await axios.get("http://localhost:3000/posts")
      img.src = res.data.posts[0].photo_url
       caption.innerText = res.data.posts[0].body
    } catch (error) {
      console.log(error)
    }
  }
  getUserHeader();
  getUserPosts()
})

// let form = document.querySelector("form")
// let email = document.querySelector("#email")
// let name = document.querySelector("#name")
// let age = document.querySelector("#age")
// let photo = document.querySelector("#photo")
// let errorAlert = document.querySelector(".error")

// form.addEventListener("submit", async (event) => {
//   event.preventDefault()
//   errorAlert.innerText = ""
//     try {
//         let res = await axios.post("http://localhost:3000/users", {
//           email: email.value,    
//           name: name.value,
//           username: username.value,
//           age: age.value,
//           photo_url: photo.value
//           });
//         window.location.href = "../HomePage/index.html"
//         sessionStorage.setItem("currentUser", username.value)
//     } catch (error) {
//       errorAlert.innerText = "Please Enter a Valid Username and Email"
//     }
//   form.reset()
// })


// document.addEventListener("DOMContentLoaded",()=>{
//   let homeFeed = document.querySelector("#homeFeed") 
//   let submit = document.querySelector("#submit")
//   let searchInput = document.querySelector("#searchInput")
//   let addPost = document.querySelector("#addPost")
//   let countsDiv = document.querySelector("#countsDiv")
//   let followerCount = document.querySelector("#followerCount")
//   let follow = document.querySelector("#follow")
//   let dislikeCount =document.querySelector("#dislikeCount")
//   let postsDiv = document.querySelector("#postsDiv")
//   let img = document.querySelector("#img")
//   let captionInput = document.querySelector("#captionInput")
//   let caption = document.querySelector("#caption")
//   let dislike = document.querySelector("#dislike")
//   let ul = document.querySelector("ul")
// const homeButton = async()=>{

// }
// const searchUsers = async()=>{

// }
// const followerButton = async()=>{

// }
// const dislikeButton = async()=>{

// }
// const captionInputBox = async()=>{

// }
// const addFullPost = async()=>{

// }


// })
