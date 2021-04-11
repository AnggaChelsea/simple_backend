const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooseConnect = require('./config/mongoose')
const morgan = require('morgan');
const routes = require('./routes')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cors());

mongooseConnect();
app.use(morgan('dev'));
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

app.get('/', (req, res)=>{
  res.send('alhamdulillah sok mangga di ango we');
})

let port = process.env.PORT;
if(port == null || port == ''){
  port = 5000
}

app.listen(port, () => {
  console.log(`App runs on http://localhost:${port}`);
});

// jgn diubah dlu, mending dimatiin aja
