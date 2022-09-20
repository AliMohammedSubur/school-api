const { createSchool, getSchool } = require("../controllers/schollController")
const { Router} = require("express")

const router = Router();

router.post("/addschool", createSchool)

router.get("/school", getSchools)

module.exports=router
