import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutTitle:string = " Embracing Technology in Real Estate";
  abouttext:string = "In a rapidly evolving world, embracing technology in real estate is not just a trend—it's a necessity. At [Your Company Name], we harness the power of innovative tools and platforms to redefine the real estate experience for buyers, sellers, and investors alike.";

  btnClass:string = "btn btn-primary";

  abtImage = "./1.jpg"

  ShowContactDetails(){

    this.abouttext =
    "Our journey began with a vision to streamline the real estate process through technology. We leverage advanced analytics, virtual tours, and AI-driven insights to make informed decisions, enhance property visibility, and improve client interactions. By integrating cutting-edge solutions, we aim to simplify transactions, increase transparency, and provide unparalleled service."

    this.btnClass="btn btn-danger";
    this.abtImage="./2.jpg"
  }

}
