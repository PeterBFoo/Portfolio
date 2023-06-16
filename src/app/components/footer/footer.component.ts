import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  ngAfterViewInit() {
    document.addEventListener('scroll', function () {
      var fadeInElements = document.querySelectorAll('.fade-in');

      for (var i = 0; i < fadeInElements.length; i++) {
        setInterval(() => {
          var element = fadeInElements[i];
          var position = element.getBoundingClientRect();

          if (position.top < window.innerHeight) {
            element.classList.add('is-visible');
          }
        }, 2000)

      }
    });
  }
}
