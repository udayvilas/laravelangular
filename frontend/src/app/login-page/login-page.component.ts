import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  public formobj = {USER_ID: null, USER_NAME:null};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Form Submitted");
    console.log(JSON.stringify(this.formobj));
    return this.http.post("http://localhost:8000/api/login",this.formobj).subscribe(
     data => console.log(data),
     error => this.handle_error(error)
    );
  }

  handle_error(error){
    console.log(error)
    alert("Error :"+error.error.error)
  }

}
