const controller = require("../controller/noteController")

const express = require("express")

const router = express.Router()

router.get("/all", controller.getAll)
router.post("/register", controller.registerNote)
router.put("/update/:id", controller.updateNote)
router.delete("/delete/:id", controller.deleteNote)


module.exports = router