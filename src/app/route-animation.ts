
// import{
//   trigger,
//   state,
//   style,
//   transition,
//   animate
// } from '@angular/animations';




//   export const fader =
//   trigger('routeAnimations', [//isto ime kao u html
//     transition('* <=> *', [ //whildcard za sve 
//       // Set a default  style for enter and leave
//       query(':enter, :leave', [//leave je prosla strana
//         style({
//           position: 'absolute',
//           left: 0,
//           width: '100%',
//           opacity: 0,
//           transform: 'scale(0) translateY(100%)',
//         }),
//       ]),
//       // Animate the new page in
//       query(':enter', [
//         animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
//       ])
//     ]),
// ]);