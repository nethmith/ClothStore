const Cloth = require('../models/cloth')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + '-' + file.fieldname
        cb(null, filename)
    }
})

const upload = multer({ storage: storage })

const getClothes = async (req, res) => {
    const clothes = await Cloth.find()
    return res.json(clothes)
}

const getCloth = async (req, res) => {
    const cloth = await Cloth.findById(req.params.id)
    return res.json(cloth)
}

const addCloth = async (req, res) => {
    console.log(req.user);

    const { title, price, description, category, size } = req.body

    if (!title || !price || !description || !category || !size) {
        res.json({ message: "All fields are required" })
    }

    const newCloth = await Cloth.create({
        title, price, description, category, size, coverImage: req.file.filename,
        createdBy: req.user.id
    })
    return res.json(newCloth)
}

const EditCloth = async (req, res) => {
    const { title, price, description, category, size } = req.body
    let cloth = await Cloth.findById(req.params.id)
    try {
        if (cloth) {
            let coverImage = req.file?.filename ? req.file.filename : cloth.coverImage
            await Cloth.findByIdAndUpdate(req.params.id, { ...req.body, coverImage }, { new: true })
            res.json({ title, price, description, category, size })
        }
    } catch (error) {
        return res.status(404).json({ message: "Cloth not found" })
    }
}

const deleteCloth = async (req, res) => {
    try {
        const cloth = await Cloth.findById(req.params.id);
        if (!cloth) {
            return res.status(404).json({ message: "Cloth not found" });
        }

        await Cloth.findByIdAndDelete(req.params.id);
        res.json({ message: "Cloth successfully deleted" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while deleting the cloth" });
    }
}


module.exports = { getClothes, getCloth, addCloth, EditCloth, deleteCloth, upload }