import { AfterViewInit, Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadingDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  @HostBinding('attr.src') srcAttr: any = null;
  @Input() src: string;


  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.srcAttr = this.src;
  }
}
