const express= require("express")
const { getClothes,getCloth, addCloth, EditCloth, deleteCloth, upload } = require("../controller/cloth")
const verifyToken = require("../middleware/auth")
const router = express.Router()

router.get("/",getClothes) //Get all clothes
router.get("/:id",getCloth) //Get cloth by ID
router.post("/",upload.single('file'), verifyToken, addCloth) //Add a new cloth
router.put("/:id",upload.single('file'), EditCloth) //Update a cloth
router.delete("/:id",deleteCloth) //Delete a cloth

module.exports = router