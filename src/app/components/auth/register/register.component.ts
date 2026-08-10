import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { userRegister } from '../../../models/authModels/authModels';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  private fb = inject(FormBuilder);
  private route = inject(Router);
  private authService = inject(AuthService);

  private selectedFile: File | null = null;

  User: userRegister = {
    FullName: '',
    Email: '',
    Password: '',
    MobileNo: 0,
    ProfileImg: null,
    Hobbies: [],
    Gender: '',
    Role: []
  };

  hobbies = [
    { label: 'Cricket', value: 'Cricket' },
    { label: 'Football', value: 'Football' },
    { label: 'Music', value: 'Music' },
    { label: 'Travel', value: 'Travel' },
  ];

  roles = [
    { label: 'Admin', value: 'Admin' },
    { label: 'Manager', value: 'Manager' },
    { label: 'Employee', value: 'Employee' },
    { label: 'HR', value: 'HR' },
  ];

  registerForm = this.fb.group({
    FullName: ['', [Validators.required, Validators.minLength(3)]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(4)]],
    MobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    ProfileImg: [null as File | null],
    Hobbies: [[] as string[]],
    Gender: ['' as string, Validators.required],
    Role: ['' as string, Validators.required],
  });

  onHobbyChange(event: Event): void {

    const input = event.target as HTMLInputElement;
    const hobby = input.value;

    const hobbies = this.registerForm.get('Hobbies')?.value ?? [];

    if (input.checked) {
      this.registerForm.patchValue({
        Hobbies: [...hobbies, hobby]
      });
    } else {
      this.registerForm.patchValue({
        Hobbies: hobbies.filter(x => x !== hobby)
      });
    }
  }

  OnFileSelect(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {

      this.selectedFile = input.files[0];

      this.registerForm.patchValue({
        ProfileImg: this.selectedFile
      });
    }
  }

  change(): void {
    this.route.navigate(['auth/login']);
  }

  onSubmit(): void {

  

    const formValue = this.registerForm.getRawValue();

    const formData = new FormData();

    formData.append('FullName', formValue.FullName ?? '');
    formData.append('Email', formValue.Email ?? '');
    formData.append('Password', formValue.Password ?? '');
    formData.append('MobileNo', formValue.MobileNo ?? '');
    formData.append('Gender', formValue.Gender ?? '');
    formData.append('Role', formValue.Role ?? '');

    formValue.Hobbies!.forEach(hobby => {
      formData.append('Hobbies', hobby);
    });

    if (formValue.ProfileImg) {
      formData.append(
        'ProfileImg',
        formValue.ProfileImg,
        formValue.ProfileImg.name
      );
    }

    this.authService.Registeruser(formData).subscribe({
      next: (res) => {
        console.log('Registration Success', res);
        this.registerForm.reset();
        this.selectedFile = null;
      },
      error: (err) => {
        console.error('Registration Error', err);
      }
    });
  }
}