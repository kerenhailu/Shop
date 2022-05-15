import React, { useContext, useState } from 'react'
import { ClothingContext } from '../../../Context/Clothing/clothing-context';
import { LoadingContext } from '../../../Context/loading/loading-context';
import { PostClothing } from '../../../Services/Clothing/clothing-service';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-125%, -50%)',
  width: 410,
  borderRadius: "5px" ,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function AddClothing() {
let[newClothing,setNewClothing]=useState({});
const [open, setOpen] = useState(false);

  const addClothing = (e) => {
    e.preventDefault();
    setNewClothing({...newClothing})
    PostClothing(newClothing);
    console.log(newClothing);
    setOpen(!open);
  }
  const updateValue = (e) => {
    newClothing[e.target.name] = e.target.value;
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <p> You add Successfully !</p>
           <button onClick={() => window.location.reload()}>OK</button>
          </Typography>
        </Box>
      </Modal>
      <div className='addClothing'>
      <h1>Add</h1>
<label>Type</label><br/>
<input type="string" name='Type' placeholder="Enter the type" onChange={updateValue} required/><br/>
<label>Gender</label><br/>
<input type="string" name='Gender' placeholder="Enter the Men or Women" onChange={updateValue}required/><br/>
<label>Name</label><br/>
<input type="string" name='Name' placeholder="Enter the name" onChange={updateValue}required/><br/>
<label>Long</label><br/>
<input type="boolean" name='Long' placeholder="Enter true or false" onChange={updateValue}required/><br/>
<label>Color</label><br/>
<input type="string" name='Color' placeholder="Enter the color" onChange={updateValue}required/><br/>
<label>Amount</label><br/>
<input type="number" name='Amount' placeholder="Enter the amount" onChange={updateValue}required/><br/>
<label>Price</label><br/>
<input type="number" name='Price' placeholder="Enter the price" onChange={updateValue}required/><br/>
<label>Img</label><br/>
<input type="string" name='Img' placeholder="Enter the img" onChange={updateValue} required/><br/>
<button type="submit" onClick={addClothing} >Add </button>
   </div> 
   </div>
  )
}
