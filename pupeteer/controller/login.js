const puppeteer = require('puppeteer');
var define_a = require('../define');
var socket_client = require('socket.io-client')(define_a.server_public);
class loginController {
  constructor() {
  }

  init(){
    socket_client.on('connect', function(){
      console.log(new Date().toISOString(), ' Connect to server',define_a.server_public );
      socket_client.emit('socket_info',
      {
          name:'app_monitor_task_login',
          task:'recieve_'+'task_login'
      }
      );
     });

   socket_client.on('disconnect', function(){
    console.log(new Date().toISOString(), 'Disconnect to server' ); 
    });

    socket_client.on(define_a.Message_Socket,  (data)=> {
        console.log('data is',data);
        if(data.login){
          this.check(data.username,data.password);
        }
    }
   );
  }

  async check(username,password) {
    const browser = await puppeteer.launch({headless:true, slowMo: 10});
    const page = await browser.newPage();
    await page.goto(define_a.link);
    await page.focus('#username')
    await page.keyboard.type(username);
    await page.focus('#password')
    await page.keyboard.type(password);
    await page.click('#login-btn');  
    console.log('vao 1');
    await page.waitFor(2000);
    await page.click('#personal > a'); 
    // await page.click('#start-btn'); 
    // await page.click('#end-btn'); 
  }
}
module.exports = new loginController();
