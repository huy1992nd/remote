var redis = require("redis");
var define_a = require('../../define');
var socket_client = require('socket.io-client')(define_a.ip_public);


function convertJson(input){
    if (typeof input === 'string' || input instanceof String){
        return JSON.parse(input);
    }else{
        return input;
    }
}

class Command {
    constructor() {
        this.initSocket();
    }

    initSocket(){
        socket_client.on('connect', function(){
            console.log(new Date().toISOString(), 'Connect to server' );
            socket_client.emit('socket_info',
                {
                    name:'task_login',
                    task: 'send_'+'task_login'
                }
            );
        });
        
        socket_client.on('disconnect', function(){
            console.log(new Date().toISOString(), 'Disconnect to server' ); 
        });
        
    }

    run_login(req,res){
        var data = convertJson(JSON.stringify(req.body));
        if(data.code == define_a.verify_code){
            socket_client.emit(define_a.Message_Socket,{
                task:'task_login',
                login:true,
                username:data.username,
                password:data.password
            })
        }

        return res.json({
            resultCode :0
           });

    }

}

   
module.exports = new Command();
