import { Injectable } from '@angular/core';
import {ParentService} from './parent_server';
@Injectable()
export class CommandService  extends ParentService {
  run_login(data :any): Promise<any>{
    return this.sendPost(data,'run_login');
  }
}
