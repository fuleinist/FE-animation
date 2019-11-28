import {createUseStyles} from 'react-jss'

export const useSlideinStyles = createUseStyles({
  root: {
  },
  "@keyframes slide-in": {
    ['100%']: { transform: 'translateX(0%)' }
  },
  "@keyframes slide-out": {
    ['100%']: { transform: 'translateX(-100%)' }
  },
  slideIn: ({ duration = 1000, delay = 0 }) => ({
    transform: 'translateX(-100%)',
    animationName: `$slide-in`,
    animationDuration: duration,
    animationDelay: delay,
    animationFillMode: 'forwards'
  }),
  slideOut: ({ duration = 1000, delay = 0 }) => ({
    animationName: `$slide-out`,
    animationDuration: duration,
    animationDelay: delay,
    animationFillMode: 'forwards'
  }),
});