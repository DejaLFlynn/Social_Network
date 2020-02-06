document.addEventListener("DOMContentLoaded", ()=> {

  const getUserHeader = async () => {
    let img = document.querySelector("#profilePic")
    let username = document.querySelector("#username")
    try {
      let res = await axios.get("http://localhost:3000/users")
      img.src = res.data.users[0].photo_url
      username.innerText = res.data.users[0].username
    } catch (error) {
      console.log(error)
    }
  }
  const getUserPosts = async () => {
    let caption = document.querySelector("#caption")
    try {
      let res = await axios.get("http://localhost:3000/posts")
      caption.innerText = res.data.posts[0].body
      // debugger
    } catch (error) {
      console.log(error)
    }
  }
  getUserHeader();
  getUserPosts()
})

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    let addPost = document.querySelector("#addPost")
    addPost.addEventListener("click", createPost)
    // let searchButton = document.querySelector("#searchButton")
    // searchButton.addEventListener("click", searchUsers)
    // let follow = document.querySelector("#follow")
    // follow.addEventListener("click", followerButton)
    // let dislike = document.querySelector("#dislike")
    // dislike.addEventListener("click", dislikeButton)
    
    
})
        const createPost = async () => {
            let postsForm = document.querySelector("#postsForm")
            postsForm.addEventListener("submit",async(event)=>{
                event.preventDefault()
                let captionInput = document.querySelector("#captionInput")
                captionInput.value = ""
                let caption = document.querySelector("#caption")
                let host = "http://localhost:3000/posts"
                let postsDiv = document.querySelector("#postsDiv")
                let img = document.querySelector("#img")
                let ul = document.querySelector("ul")
                try{
                    let response = await axios.post(host)
                
                    console.log(response)
                    caption.innerText = response.data.message
                    postsDiv.appendChild(caption)
                    postsDiv.appendChild(img)
                    postsDiv.appendChild(ul)
            
                }catch(error){
                    console.log(error)
                    caption.innerText = error.response.data.message
                }
            })
        }
    // const searchUsers = async (event) => {
    //     event.preventDefault()
    //     let submit = document.querySelector("#submit")
    //     let searchInput = document.querySelector("#searchInput")
    //     searchInput.value = ""
    //     let host = "http://localhost:3000/users/:id"
        
    // }
    // const followerButton = async () => {

    // }
    // const dislikeButton = async () => {
    //     let countsDiv = document.querySelector("#countsDiv")
    //     let followerCount = document.querySelector("#followerCount")
    //     let dislikeCount = document.querySelector("#dislikeCount")
    //     let host = "http://localhost:3000"
    // }

    
    
=======
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
>>>>>>> 29bacccafbd4eec6d104547847731e44f32bbdf4

// }
// const captionInputBox = async()=>{

<<<<<<< HEAD
=======
// }
// const addFullPost = async()=>{

// }


// })
>>>>>>> 29bacccafbd4eec6d104547847731e44f32bbdf4
