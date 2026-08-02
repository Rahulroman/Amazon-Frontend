import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { userRegister } from '../../../models/authModels/authModels'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { ApiServiceService } from '../../../services/api.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, InputTextModule],
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


onSubmit(from : any){


}


  change() {
    this.route.navigate(["auth/login"]);
  }






}
