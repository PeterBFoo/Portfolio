import { AfterContentInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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


}
