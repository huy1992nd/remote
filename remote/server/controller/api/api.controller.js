var bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
var commandRouter = require('../api/routes/commandRouters');
var express = require('express');
const config = require('config'); 

class ApiController {
  constructor() {
    this.app = express();
    this.http = require('http').Server(this.app);
    this.io = require('socket.io')(this.http);
  }
  Init() {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    })

    this.app.use( (req, res, next)=> {
      next();  
    });

    this.InitRouter();
    this.InitWeb();
    this.startApi();
  }

  InitRouter(){
    commandRouter(this.app);
  }

  InitWeb(){
    this.app.use( express.static(path.join(__dirname, '../../../client/dist')));
  }


  startApi(){
    var server = this.http.listen(7777, function () {
      var host = server.address().address
      var port = server.address().port
      console.log("monitor app api", host, port);
    });    
  }
}
module.exports = new ApiController();

