import { Component, OnInit } from '@angular/core';
import { passwordStrength } from 'check-password-strength'
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/User';
import { AuthenticationService } from 'src/app/services/user/authentication.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  // private _registerUrl= 'http://localhost:1337/users/register';
  registerUserData :IUser= {
    username: '',
    email:'',
    password: ''
  };
  loginUserData :any ={
    emailorusername: '',    
    password: '' 
  }
  login:boolean=true;
  loginfailed:boolean=false;
  allUsersNames:string[]=[];
  allUsersEmail:string[]=[];
  

  constructor(private _authentication: AuthenticationService, private _router:Router) {
    this._authentication.getAllUsers()
    .then(data => {
      this.allUsersNames=data.users.map(user => user.username);
      this.allUsersEmail=data.users.map(user => user.email);
    })
    .catch(error => console.log(error.message));
  }
  emailErrorMessage:string="";
  userNameErrorMessage:string="";
  passWordError:{message:string,value:string,validation:boolean,color:string}={message:"",value:"",validation:true,color:"red"};
  repeatedPassWordError:{message:string,value:string,validation:boolean,color:string}={message:"",value:"",validation:true,color:"red"};
  resgisterEnabled=():boolean=>!this.emailErrorMessage &&!this.userNameErrorMessage&&this.passWordError.validation&&this.repeatedPassWordError.validation; 
  checkEmail = ($event:any) =>{
    const regularExpression:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.allUsersEmail.includes(String($event.target.value).toLocaleLowerCase())){
      this.emailErrorMessage='Cet email est deja pris !'
    }
    else if(!regularExpression.test(String($event.target.value).toLowerCase())){
      this.emailErrorMessage='Veuillez choisir un email valide !'
    }    
    else{
      this.emailErrorMessage="";
    }
    console.log(regularExpression.test(String($event.target.value).toLowerCase()));
    console.log(this.resgisterEnabled());
  }
  checkUserName = ($event:any) =>{
    const result =this.allUsersNames.includes($event.target.value)?`ce pseudo est déja pris`:'';
    this.userNameErrorMessage=result;
    console.log(this.resgisterEnabled());
  }

  checkPasswordCorrespondence = (password:string) =>{
    if(this.repeatedPassWordError.value.length>0)
        if (this.repeatedPassWordError.value === password){
          console.log('called');
          this.repeatedPassWordError={
            message:"les mots de passes correspondent",
            value:this.repeatedPassWordError.value,
            validation:true,
            color:"yellow",
          }
        }
        else{
          this.repeatedPassWordError={
            message:"les mots de passes ne correspondent pas !",
            value:this.repeatedPassWordError.value,
            validation:true,
            color:"red",
          }
        }
    }
  

  checkPassword = ($event:any) =>{
    // console.log("called !");
    if(passwordStrength($event.target.value).id === 0 ){
      this.passWordError.message="Mot de passe TROP faible !";
      this.passWordError.validation=false;
      this.passWordError.color="red";
      this.passWordError.value=$event.target.value;
      this.checkPasswordCorrespondence($event.target.value);
    }
    else if(passwordStrength($event.target.value).id === 1 ){
      this.passWordError.message="Mot de passe faible";
      this.passWordError.validation=false;
      this.passWordError.color="orange";
      this.passWordError.value=$event.target.value;
      this.checkPasswordCorrespondence($event.target.value);
    }
    else{
      this.passWordError.message="Mot de passe  fort";
      this.passWordError.validation=true;
      this.passWordError.color="yellow";
      this.passWordError.value=$event.target.value; 
      this.checkPasswordCorrespondence($event.target.value);
    }
  }
  checkRepeatedPassWord = ($event:any) =>{
    if(this.passWordError.value !== $event.target.value){
      this.repeatedPassWordError.validation=false;
      this.repeatedPassWordError.message="les mots de passes ne correspondent pas";
      this.repeatedPassWordError.value=$event.target.value;
      this.repeatedPassWordError.color="orange";
    }
    else{
      this.repeatedPassWordError.value=$event.target.value;
      this.repeatedPassWordError.message="les mots de passes correspondent";
      this.repeatedPassWordError.validation=true;
      this.repeatedPassWordError.color="yellow";
    }

  }
  switchToLogin = () =>{
    this.login=true;
  }

  switchToRegister = () =>{
    this.login=false;
  }
  registerUser = () => {
    this._authentication.registerUser(this.registerUserData)
                        .subscribe(
                          response => {
                            console.log(response);
                            localStorage.setItem('token',response.token);
                            this._router.navigate(['/services/userprofile']);
                          }, 
                          error => console.log(error)
                        );
  } 
  loginUser = () => {
    this._authentication.loginUser(this.loginUserData)
                        .subscribe(
                          response => {
                            console.log(response);
                            localStorage.setItem('token',response.token);
                            this._router.navigate(['/services/userprofile'])
                          }, 
                          error => {
                            console.log(error)
                            this.loginfailed=true;
                          }
                        );
  }  
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}  

