require('dotenv').config()
const express=require("express")
const app=express()
const port=4000

const github_api={
    "login": "arpitrai2002",
    "id": 108708973,
    "node_id": "U_kgDOBnrEbQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/108708973?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/arpitrai2002",
    "html_url": "https://github.com/arpitrai2002",
    "followers_url": "https://api.github.com/users/arpitrai2002/followers",
    "following_url": "https://api.github.com/users/arpitrai2002/following{/other_user}",
    "gists_url": "https://api.github.com/users/arpitrai2002/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/arpitrai2002/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/arpitrai2002/subscriptions",
    "organizations_url": "https://api.github.com/users/arpitrai2002/orgs",
    "repos_url": "https://api.github.com/users/arpitrai2002/repos",
    "events_url": "https://api.github.com/users/arpitrai2002/events{/privacy}",
    "received_events_url": "https://api.github.com/users/arpitrai2002/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Arpit Rai",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 23,
    "public_gists": 0,
    "followers": 5,
    "following": 3,
    "created_at": "2022-07-05T03:08:29Z",
    "updated_at": "2024-09-27T17:54:30Z"
}  

app.get("/",(req,res)=>{
    res.send("Hello Ji")
})

app.get("/x",(req,res)=>{
    res.send("arpitrai2002")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Enter your login details</h1>")
})

app.get("/dashboard",(req,res)=>{
    res.send("<h2>Welcome To dashboard</h2>")
})

app.get('/github',(req,res)=>{
    res.json(github_api)
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is runing on ${process.env.PORT}`);
})