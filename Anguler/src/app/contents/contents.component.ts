import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contents',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.css'
})
export class ContentsComponent {

  User:string = "M.Adeel Chowdhry";
  Email:string = "someone@gmail.com";

}
