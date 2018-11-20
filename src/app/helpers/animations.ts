import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

export let fadeIn = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [
      animate(500)
  ])
])

export let slideOut = trigger('slide', [
  state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
  transition(':enter, :leave', [
      animate(300)
  ])
])

export let fadeIn_bounceOutLeft = trigger('fadeIn-bounceOutLeft', [
  transition(':enter', [
      style({ opacity: 0 }),
      animate('0.3s ease-out')
  ]),
  transition(':leave', [
    animate('0.5s ease-in', keyframes([
      style({ offset: 0.2, opacity: 1, transform: 'translateX(50px)' }),
      style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' })
    ]))
  ])
])

export let bounceOutLeft = trigger('bounceOutLeft', [
  transition(':leave', [
      animate('0.5s ease-in', keyframes([
        style({ offset: 0.2, opacity: 1, transform: 'translateX(50px)' }),
        style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' })
      ]))
  ])
])