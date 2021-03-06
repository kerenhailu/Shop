require('dotenv').config();
const express = require('express');
require('./DB');
const cors = require('cors');
const path=require('path');
const clothingRouter=require('./Routes/clothing-router');
const usersRouter = require('./Routes/users-router');
const cartRouter = require('./Routes/cart-router');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

// const passport = require('passport');
// const passportMiddleware = require('./config/passport');
// passportMiddleware(passport);
app.use('/users', usersRouter);
 app.use('/clothing', clothingRouter);
 app.use('/cart', cartRouter);
// app.use('/news', passport.authenticate("jwt",{session:false}),newsRouter)
// app.use(passport.initialize());
app.listen(process.env.PORT);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    })
}
console.log(process.env.NODE_ENV);

