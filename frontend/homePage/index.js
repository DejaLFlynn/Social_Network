document.addEventListener("DOMContentLoaded", () => {
    let appendDiv = document.querySelector(".addHater")
    let newDivs = document.createElement("div")
    let ul = document.createElement("ul")
    const getAllPosts = async() => {
        try {
            let res = await axios.get(`http://localhost:3000/posts`)
            let posts = res.data.posts
            // debugger
            posts.forEach(post=>{
                let li = document.createElement("li")
                li.innerText = post.body
                ul.appendChild(li)
            
                
            })
        

            newDivs.appendChild(ul)
            appendDiv.appendChild(newDivs)
            // debugger
        } catch (err) {
            console.log(err)
        }
    }
    
    getAllPosts()
})