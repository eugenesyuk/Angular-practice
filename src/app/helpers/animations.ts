import { trigger, state, transition, style, animate, keyframes, animation, useAnimation, query, stagger } from '@angular/animations';

// FadeIn
export let fadeInAnimation = animation(
  animate('0.3s ease-out', keyframes([
      style({ offset: 0, opacity: 0 }),
      style({ offset: 1, opacity: 1 })
    ])
  )
);

export let fadeIn = trigger('fade', [
  transition(':enter', [useAnimation(fadeInAnimation)])
]);

// BounceOutLeft
export let bounceOutLeftAnimation = animation(
  animate('0.5s ease-in', keyframes([
    style({ offset: 0.2, opacity: 1, transform: 'translateX(50px)' }),
    style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' })
  ]))
);

export let bounceOutLeft = trigger('bounceOutLeft', [
  transition(':leave', [useAnimation(bounceOutLeftAnimation)])
]);

// SlideOut
export let slideOut = trigger('slide', [
  state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
  transition(':enter, :leave', [
      animate(300)
  ])
]);

// TopInStagger
export let topInStagger = trigger('topInStagger', [
  transition('void => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(-15px)' }),
      stagger(25, animate('.25s ease-out', style({ opacity: 1, transform: 'translateY(0px)' })))
    ])
  ])
]);
