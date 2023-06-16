import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sidebarMenu', { static: false }) sidebarMenu!: ElementRef
  @ViewChild('arrow', { static: false }) arrow!: ElementRef;
  @Input() actualPage!: string;
  isArrowVisible: boolean = false;

  ngAfterViewInit(): void {
    document.getElementById(this.actualPage)?.classList.add("active")
    this.arrow.nativeElement.style.transform = 'translateX(-100%)';
    this.sidebarMenu.nativeElement.style.transform = 'translateX(-100%)';
  }

  ngOnDestroy(): void {
    document.getElementById(this.actualPage)?.classList.remove("active")
  }

  hideNavbar() {
    this.sidebarMenu.nativeElement.style.transform = 'translateX(-100%)';
    this.sidebarMenu.nativeElement.style.transition = 'transform 0.7s ease-out';
  }

  showNavbar() {
    this.sidebarMenu.nativeElement.style.transform = 'translateX(0)';
    this.sidebarMenu.nativeElement.style.transition = 'transform 0.2s ease-out';
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (event.clientX <= 100) {
      this.arrow.nativeElement.style.transition = 'transform 0.3s ease-out';
      this.arrow.nativeElement.style.transform = 'translateX(0%)';
    } else {
      this.arrow.nativeElement.style.transition = 'transform 0.3s ease-out';
      this.arrow.nativeElement.style.transform = 'translateX(-100%)';
    }
  }
}
