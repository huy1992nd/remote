/**
 * Created by HAI on 5/23/2017.
 */
import {ToasterModule, ToasterService, ToasterConfig,Toast} from 'angular2-toaster';
import {Stringifier} from "postcss";
// export var server: string = 'http://172.16.4.33:7777';
export var server: string = 'http://45.124.86.213:7777';
export var current_user:any;

 export function getToast(titles :string,message:string){
   var toast: Toast = {
     type: 'info',
     title: titles,
     body: message
   };

  return toast;
 }
