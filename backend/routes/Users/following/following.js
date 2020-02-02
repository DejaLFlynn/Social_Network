const userFollowing = require("express").Router({mergeParams: true})
const {getHaters} = require("../../../queries/following")

userFollowing.get("/", getHaters) 

module.exports = userFollowing
