const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//inicialize express
const app = express();


app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((request, response, next) => {
    response.render('404', {pageTitle:"page not found"})
})

app.listen(3000)

