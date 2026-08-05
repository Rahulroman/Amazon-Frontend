import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { userRegister } from '../../../models/authModels/authModels'
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { ApiServiceService } from '../../../services/api.service';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule,ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private route = inject(Router);
  private authService = inject(AuthService);
  private apiService = inject(ApiServiceService)


  User : userRegister =  {
    FullName : '',
    Email : '',
    Password : '',
    MobileNo : 0,
    ProfileImg : null,
    Hobbies : [],
    Gender : '',
    Role : []

  };

 hobbies = [
    { label: 'Cricket', value: 'Cricket' },
    { label: 'Football', value: 'Football' },
    { label: 'Music', value: 'Music' },
    { label: 'Travel', value: 'Travel' }
  ];

   roles = [
    { label: 'Admin', value: 'Admin' },
    { label: 'Manager', value: 'Manager' },
    { label: 'Employee', value: 'Employee' },
    { label: 'HR', value: 'HR' }
  ];


  onHobbyChange(event: any) {

    const hobby = event.target.value;

    if (event.target.checked) {
      this.User.Hobbies.push(hobby);
    } else 
      {
      this.User.Hobbies = this.User.Hobbies.filter(x => x !== hobby);
    }

  }


  OnFileSelect(event : any){

    if (event.target.files.length > 0) {
      this.User.ProfileImg = event.target.files[0];
    }

  }


onSubmit(form: NgForm) {

    console.log('Form Object :', form);

    console.log('Form Value :', form.value);

    console.log('Full Name :', form.value.FullName);

    console.log('Email :', form.value.Email);

    console.log('Password :', form.value.Password);

    console.log('Mobile No :', form.value.MobileNo);

    console.log('Gender :', form.value.Gender);

    console.log('Role :', form.value.Role);

    console.log('Hobbies :', this.User.Hobbies);

    console.log('Profile Image :', this.User.ProfileImg);

    console.log('Complete User Object :', this.User);

  }


  change() {
    this.route.navigate(["auth/login"]);
  }






}
