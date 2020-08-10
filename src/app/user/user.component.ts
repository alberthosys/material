import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public form:FormGroup;
  public comentario:string[]=[];
  constructor(public fb:FormBuilder){
    this.form=fb.group({
      comentario:[null]
    })
  }

  ngOnInit(): void {
    this.comentario.push("Este es un comentario....")
  }

  public add(){
    this.comentario.push(this.form.controls.comentario.value);
  }

  public delete(pos:number){
    let tempList:string[]=[];
    this.comentario.forEach((item ,i)=>{
      if(i!=pos){
        tempList.push(item)
      }
    })
    this.comentario=tempList;
    this.form.controls.comentario.setValue(null);
  }
}
