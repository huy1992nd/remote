/**
 * Created by HAI on 5/24/2017.
 */
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
  
import  * as global from '../../common/settingManager';
import { CommandService } from '../../service/command_server';
import { Order }  from '../../model/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'command',  // <home></home>
  providers: [

  ],
  templateUrl: './command.component.html',
  styleUrls: [
    "./all.css"
  ],
})

export class CommandComponent implements OnInit {
  @ViewChild('close_modal') modelId: ElementRef;
  // Set our default values

  errorMessage:string;
  account = {
    username:'nguyen.quang.huy',
    password:''
  }


  //search
  typingTimer;
  search_order ='';
  constructor(public router: Router  , private commandService: CommandService  ) {
  }

  public ngOnInit() {

  }
  checkLogin(){
    var code_secure = window.prompt("Please enter your code");
    this.commandService.run_login({
      code:code_secure,
      username:this.account.username,
      password:this.account.password
    }).then(data=>{
      if(data.resultCode == 0){
        console.log('send run ok');
      }
    })
    .catch(err=>{
      console.log('Have some err when send run',err);
    })
  }
}
