import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            if ($target) {
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
            }
          });
        });
      }
    });
  }
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token'); // Remplacez 'auth_token' par votre clé de token réelle
  }
}

