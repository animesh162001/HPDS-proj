import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrls: ['./file-management.component.css']
})
export class FileManagementComponent{
  constructor(private router: Router) {}
  files: File[] = [];
  selectedFile: File | null = null;
  updatedFiles: { [key: string]: File } = {};

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const fileInput = event.target;
    if (fileInput) {
      fileInput.value = ''; 
    }
  }

  onUpdateFileSelected(event: any, file: File) {
    this.updatedFiles[file.name] = event.target.files[0];
    const fileInput = event.target;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      this.files.push(this.selectedFile);
      this.selectedFile = null; 
    }
  }

  downloadFile(file: File) {
    
  }

  deleteFile(file: File) {
    const index = this.files.indexOf(file);
    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }

  updateFile(file: File) {
    const updatedFile = this.updatedFiles[file.name];
    if (updatedFile) {
      
      delete this.updatedFiles[file.name]; 
    }
  }
  redirectToDashboard() {
    this.router.navigate(['/dashboard']); // Navigate to the 'dashboard' route
  }
}

