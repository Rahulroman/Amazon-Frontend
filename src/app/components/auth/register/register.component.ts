import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { userRegister } from '../../../models/authModels/authModels'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { ApiServiceService } from '../../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private route = inject(Router);
  private authService = inject(AuthService);
  private apiService = inject(ApiServiceService)

  User: userRegister = {
    FullName: '',
    email: '',
    Password: '',
    MobileNo : 0
  };

  onRegister() {

    //    this.isLoading = true;

    this.authService.onRegister(this.User).subscribe({
      next: (res) => {
        //  this.notificationService.showSuccess("Logged in successfully");
        //     this.route.navigate(['/dashboard']);
        //    this.isLoading = false;
        //  this.loadingService.hide();

      },
      error: (error) => {
        //     this.notificationService.showError("Login failed: " + error.message);
        //    this.isLoading = false;
        //  this.loadingService.hide();
      }
    });
  }




  change() {
    this.route.navigate(["auth/login"]);
  }






}
