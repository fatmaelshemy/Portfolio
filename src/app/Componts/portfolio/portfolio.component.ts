import { Component } from '@angular/core';
import { IProject } from '../Models/IProject';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PORTFOLIOComponent {

  projects: IProject[];
  constructor() {
    this.projects = [
      { id: 1, visiable: true, linkgithub: "", title: "JobHub Website", catId: 3, image: "assets/images/img7.PNG", description: "MVC Project for Job Applications and Job Postings by Companies, with Authentication and Authorization Using MVC and SignalR." },
      { id: 2, visiable: true, linkgithub: "https://github.com/fatmaelshemy/project-Managment-System", title: "Project Management System", catId: 2, image: "assets/images/img8.PNG", description: "This project utilizes JavaScript for adding, updating, and deleting products, categories, prices, and availability through CRUD operations. Data is stored locally for efficient retrieval." },
      { id: 3, visiable: true, linkgithub: "https://github.com/fatmaelshemy/Travel-website", title: "Travel Website", catId: 2, image: "assets/images/img10.PNG", description: "A website designed using HTML and CSS, showcasing contact and booking functionalities for various trips. It incorporates animated search features and UI/UX elements to enhance its visual appeal." },
      { id: 4, visiable: true, linkgithub: "https://github.com/fatmaelshemy/Tourism-Website", title: "Tourism Website", catId: 2, image: "assets/images/img1.PNG", description: "A comprehensive project developed within my team at ITI, encompassing a tourism company's online presence with features like homepage, about us, contact us, login, register, destination details, and booking capabilities, implemented using HTML, CSS, JavaScript, TypeScript, jQuery, and Bootstrap." },
      { id: 5, visiable: true, linkgithub: "https://github.com/fatmaelshemy/Ecommerce", title: "E-commerce Website", catId: 2, image: "assets/images/img2.PNG", description: "An extensive website built with HTML, CSS, JavaScript, jQuery, and Bootstrap, featuring multiple shopping pages, product details, categories, payment functionalities, and a shopping cart." },
      { id: 6, visiable: true, linkgithub: "https://github.com/fatmaelshemy/Portfolio", title: "PORTFOLIO Website", catId: 4, image: "assets/images/img4.PNG", description: "My PORTFOLIO Using Angular Framework" },
      { id: 7, visiable: true, linkgithub: "https://github.com/fatmaelshemy/watchProject", title: "Watch Project", catId: 2, image: "assets/images/img3.PNG", description: "This Project To Client In Platform  for selling watches featuring a homepage, contact page with WhatsApp integration, shop page, testimonials, and user authentication using HTML, CSS, JavaScript, jQuery, and Bootstrap." },

      { id: 8, visiable: true, linkgithub: "https://github.com/fatmaelshemy/Bank-management-system", title: "Bank Management System", catId: 6, image: "assets/images/img5.png", description: "My inaugural project employing C++ and object-oriented programming (OOP) concepts, leveraging queue data structures for bank queue management and priority queues for handling special cases." },
      { id: 9, visiable: true, linkgithub: "https://github.com/fatmaelshemy/menu", title: "Menu Project", catId: 2, image: "assets/images/img6.PNG", description: "This Project To Client In platform for creating food menus, offering features such as sliders, filters, and support for both Arabic and English languages, implemented using HTML, CSS, and JavaScript." },

      { id: 10, visiable: true, linkgithub: "https://github.com/fatmaelshemy/store-manegment-system", title: "Store Management System", catId: 6, image: "assets/images/img9.PNG", description: "My introductory project in C programming, focusing on category and product management, including functionalities for updating, deleting, and purchasing products. It generates invoices with detailed order information." },
    ];
  }
  options: any = [

    { Cat: "FrontEnd", catId: 2 },
    { Cat: "MVC", catId: 3 },
    { Cat: "Angular", catId: 4 },
    { Cat: "WebAPI", catId: 5 },
    { Cat: "C&C++", catId: 6 }
  ]
  searchItem: string = '';
  search() {
    // Reset visibility of all projects
    this.projects.forEach(project => project.visiable = true);

    // If search term is provided, filter projects based on it
    if (this.searchItem.trim() !== '') {
      const searchTerm = this.searchItem.trim().toLowerCase();
      this.projects.forEach(project => {
        const titleContainsSearchTerm = project.title.toLowerCase().includes(searchTerm);
        const descriptionContainsSearchTerm = project.description.toLowerCase().includes(searchTerm);
        if (!titleContainsSearchTerm && !descriptionContainsSearchTerm) {
          project.visiable = false;
        }
      });
    }
  }
  selectedCategory: number | string = 'All';

  filterByCategory() {
    if (this.selectedCategory == 'All') {
      this.projects.forEach(project => project.visiable = true);
    } else {
      this.projects.forEach(project => {
        project.visiable = project.catId == this.selectedCategory;
      });
    }
  }



}



