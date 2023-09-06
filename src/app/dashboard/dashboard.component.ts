import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  files: File[] = [];
  updatedFiles: { [key: string]: File } = {};

  searchQuery: string = '';

  // Function to filter files based on the search query
  searchFiles() {
    if (this.searchQuery.trim() === '') {
      // If the search query is empty, show all files (reset filtering)
      return;
    }

    // Use array filtering to match files based on the search query
    this.files = this.files.filter((file) => {
      // Modify the condition to match based on your file metadata
      return (
        file.name.toLowerCase().includes(this.searchQuery.toLowerCase()) 
      );
    });
  }

  onDeleteFile(file: File) {
    const index = this.files.indexOf(file);
    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }

  onUpdateFileSelected(event: any, file: File) {
    this.updatedFiles[file.name] = event.target.files[0];
  }

  updateFile(file: File) {
    const updatedFile = this.updatedFiles[file.name];
    if (updatedFile) {
      const index = this.files.indexOf(file);
      if (index !== -1) {
        this.files[index] = updatedFile;
        delete this.updatedFiles[file.name];
      }
    }
  }

  formatFileSize(size: number): string {
    if (size < 1024) {
      return size + ' B';
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(2) + ' KB';
    } else {
      return (size / (1024 * 1024)).toFixed(2) + ' MB';
    }
  }
}
