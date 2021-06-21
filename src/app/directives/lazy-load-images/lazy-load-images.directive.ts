import { Directive, Input, Renderer2, ViewContainerRef } from '@angular/core';

const LOADING_CLASS = 'fade-in';

enum CssClass {
  LOADING_CLASS = 'fade-in',
  STARTING_HIDDEN_CLASS = 'fade-in-starting-state',
}

@Directive({
  selector: '[appLazyLoadImages]',
})
export class LazyLoadImagesDirective {
  @Input() appLazyLoadImagesOffset = '200px';
  nativeElement = this.viewContainerRef.element.nativeElement;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly renderer: Renderer2
  ) {
    this.renderer.addClass(this.nativeElement, CssClass.STARTING_HIDDEN_CLASS);
    this.isElementInViewport();
  }

  private addAnimationClass(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.nativeElement, LOADING_CLASS);
      }
    });
  }

  private isElementInViewport(): void {
    let options = {
      rootMargin: this.appLazyLoadImagesOffset,
    };
    let observer = new IntersectionObserver(
      this.addAnimationClass.bind(this),
      options
    );
    observer.observe(this.nativeElement);
  }
}
