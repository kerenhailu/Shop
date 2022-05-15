const Cart =require("../Models/cart-model");

const getAllCart = async (req, res) => {
  await Cart.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const getCartById = async (req, res) => {
  await Cart.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const postCart = async (req, res) => {
  await Cart.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const putCart = async (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
.then(result=>{
res.status(200).json(result)
})
.catch(err=>{
  res.status(500).json({massage:"update is failed"})
})
};

const deleteCart = async (req, res) => {
    Cart.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: result, message: "the News delete" })
    })
};

module.exports = {
  getAllCart,
  getCartById,
  postCart,
  putCart,
  deleteCart,
};