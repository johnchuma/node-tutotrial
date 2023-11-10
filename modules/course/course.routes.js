const Router = require("express")
const { createCourse } = require("./course.controller")
const router = Router()
router.post('/',createCourse)

module.exports = router