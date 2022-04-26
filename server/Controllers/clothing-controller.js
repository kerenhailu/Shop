const Clothing =require("../Models/clothing-model");

const getAllClothing = async (req, res) => {
  await Clothing.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const getClothingById = async (req, res) => {
  await Clothing.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const postClothing = async (req, res) => {
  await Clothing.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const putClothing = async (req, res) => {
    Clothing.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
.then(result=>{
res.status(200).json(result)
})
.catch(err=>{
  res.status(500).json({massage:"update is failed"})
})
};

const deleteClothing = async (req, res) => {
    Clothing.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: result, message: "the News delete" })
    })
};

module.exports = {
  getAllClothing,
  getClothingById,
  postClothing,
  putClothing,
  deleteClothing,
};