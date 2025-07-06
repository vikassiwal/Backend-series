require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()
const port = process.env.PORT || 3000;

const githubData={
  "login": "vikassiwal",
  "id": 129653487,
  "node_id": "U_kgDOB7pa7w",
  "avatar_url": "https://avatars.githubusercontent.com/u/129653487?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vikassiwal",
  "html_url": "https://github.com/vikassiwal",
  "followers_url": "https://api.github.com/users/vikassiwal/followers",
  "following_url": "https://api.github.com/users/vikassiwal/following{/other_user}",
  "gists_url": "https://api.github.com/users/vikassiwal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vikassiwal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vikassiwal/subscriptions",
  "organizations_url": "https://api.github.com/users/vikassiwal/orgs",
  "repos_url": "https://api.github.com/users/vikassiwal/repos",
  "events_url": "https://api.github.com/users/vikassiwal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vikassiwal/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "i.siwal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-04-02T08:29:00Z",
  "updated_at": "2025-07-05T15:24:11Z"
}

app.get('/', (req, res) => {
  res.send('Hello vicky !')
})

app.get('/twitter',(req, res)=>{
    res.send('vickydotcom')
})
// When someone opens this URL in the browser:
//  http://localhost:3000/twitter

// Your server will "respond" (send back) a message — in this case:
//  "vickydotcom"
app.get('/login',(req,res)=>{
    res.send('<h1> please login at my web</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


