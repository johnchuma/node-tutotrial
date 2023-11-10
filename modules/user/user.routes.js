const Router = require("express")
const { createUser, getUserDetails} = require("./user.controller")
const router = Router()

router.post("/",createUser)
router.get("/:uuid",getUserDetails)

module.exports = router