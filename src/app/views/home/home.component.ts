import { AfterContentInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    document.addEventListener('scroll', function () {
      var fadeInElements = document.querySelectorAll('.fade-in');

      for (var i = 0; i < fadeInElements.length; i++) {
        var element = fadeInElements[i];
        var position = element.getBoundingClientRect();

        if (position.top < window.innerHeight) {
          element.classList.add('is-visible');
        }
      }
    });
  }

  redirectToJobPortal() {
    window.open("https://findnrock.tech", '_blank')
  }

  redirectToNativics() {
    window.open("https://www.nativics.com/en", '_blank')
  }
}  