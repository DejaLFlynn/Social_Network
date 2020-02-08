const getUserHeader = async () => {
  let img = document.querySelector("#profilePic")
  let username = document.querySelector("#username")
  try {
    let res = await axios.get(`http://localhost:3000/users/${sessionStorage.username}`)
    username.innerText = res.data.user.username
    img.src = res.data.user.photo_url
  } catch (error) {
    console.log(error)
  }

}

const getUserPosts = async () => {
  let img = document.querySelector("#postPic")
  //let caption = document.querySelector("#caption")
  try {
    let res = await axios.get(`http://localhost:3000/posts/${sessionStorage.id}`)
    debugger

    img.src = res.data.posts[3].photo_url
    //caption.innerText = res.data.posts[0].body
  } catch (error) {
    console.log(error)
  }
} 
getUserHeader();
getUserPosts()

//Follow
let followButton = document.querySelector("#follow")
followButton.addEventListener("click", () => {
  followButton.innerText === "HATE" ? followButton.innerText = "HATING" : followButton.innerText = "HATE"
})

//Add Post Form
let addPostForm = document.querySelector(".addPostForm")

addPostForm.addEventListener("submit", async (event) => {
  let image = document.querySelector("#addImageURL")
  let caption = document.querySelector("#addImageCaption")
  event.preventDefault()
    try {
        let res = await axios.post("http://localhost:3000/posts", {
        user_post_id: sessionStorage.id, 
        photo_url: image.value,
        body: caption.value
          });
    } catch (error) {  
      console.log(error)
    }
    addPostForm.reset()
    closeForm()
  })
  

const openForm = () => {
    document.querySelector(".addPostFormContainer").style.display === "none" ? document.querySelector(".addPostFormContainer").style.display = "block" : document.querySelector(".addPostFormContainer").style.display = "none"

  }
const closeForm = () =>{
    document.querySelector(".addPostFormContainer").style.display = "none";
  }






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
