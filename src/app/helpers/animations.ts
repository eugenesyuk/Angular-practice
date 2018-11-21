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
    query(':enter', style({ opacity: 0})),
    query(':enter', [
      stagger(100, animate('.1s ease-out', keyframes([
          style({ opacity: 1, transform: 'translateY(-75px)', offset: 0 }),
          style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ])
      ))
    ])
  ])
]);
