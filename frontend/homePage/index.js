document.addEventListener("DOMContentLoaded", () => {
    let main = document.querySelector("main")
    let newDivs = document.createElement("div")
    let ul = document.createElement("ul")
    const getAllPosts = async() => {
        try {
            let res = await axios.get(`http://localhost:3000/posts`)
            let posts = res.data.posts
            // debugger
            posts.forEach(post=>{
                let li = document.createElement("li")
                let img = document.createElement("img")
                img.src = post.photo_url
                li.innerText = post.body
                ul.appendChild(img)
                ul.appendChild(li)
            })
        

            newDivs.appendChild(ul)
            main.appendChild(newDivs)
            // debugger
        } catch (err) {
            console.log(err)
        }
    }
    
    getAllPosts()
})