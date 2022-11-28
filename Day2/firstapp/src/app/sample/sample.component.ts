import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  favBool:boolean;
  favClass:string;
  customerName:string;
  customerAge:number;
  customerDOB:Date;
  customerSkills:string[];
  ageClass:string;

  constructor() {
    this.favBool = false;
    this.favClass="glyphicon glyphicon-heart-empty"
    this.customerName ="Gayathri Mahadevan"
    this.customerAge = 12;
    this.customerDOB = new Date(1982,9,19);
    this.customerSkills = [
      "C#","Java","Angular",".NET","SQL","python"
    ]
    // if(this.customerAge>18)
    //   this.ageClass = "alert alert-success"
    //   else
    //     this.ageClass = "alert alert-danger"
    this.ageClass = this.customerAge>18?"alert alert-success":"alert alert-danger"
   }

  ngOnInit(): void {
    console.log(this.customerName)
    //alert(this.customerName+" is "+ this.customerAge +"year old")
    //alert(this.customerDOB);
    for (let index = 0; index < this.customerSkills.length; index++) {
     console.log(this.customerSkills[index])
    }
    this.customerSkills.forEach(element => {
      console.log(element)
    });
  }
  favClickHandler(){
    this.favBool = !this.favBool;
    if(this.favBool)
      this.favClass = "glyphicon glyphicon-heart"
    else
      this.favClass = "glyphicon glyphicon-heart-empty"
    //alert("hello you clicked my heart")
  }

}
