

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

    
    


