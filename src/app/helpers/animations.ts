import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

export let fadeInAnimation = animation(
  animate('0.3s ease-out', keyframes([
      style({ offset: 0, opacity: 0 }),
      style({ offset: 1, opacity: 1 })
    ])
  )
)

export let bounceOutLeftAnimation = animation(
  animate('0.5s ease-in', keyframes([
    style({ offset: 0.2, opacity: 1, transform: 'translateX(50px)' }),
    style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' })
  ]))
);

export let fadeIn = trigger('fade', [
  transition(':enter', [useAnimation(fadeInAnimation)])
])

export let bounceOutLeft = trigger('bounceOutLeft', [
  transition(':leave', [useAnimation(bounceOutLeftAnimation)])
]);

export let slideOut = trigger('slide', [
  state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
  transition(':enter, :leave', [
      animate(300)
  ])
])