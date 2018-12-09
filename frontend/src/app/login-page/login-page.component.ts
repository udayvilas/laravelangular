import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  public formobj = {firstname:null,lastname:null,age:null,email:null,password:null};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Form Submitted");
    //console.log(JSON.stringify(this.formobj));
    return this.http.post("http://localhost:8000/api/login",this.formobj).subscribe(
     data => console.log(data),
     error => console.log(error)
    );
  }

}
