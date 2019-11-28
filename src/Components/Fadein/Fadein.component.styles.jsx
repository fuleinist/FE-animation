import {createUseStyles} from 'react-jss'

export const useFadeinStyles = createUseStyles({
  root: {
  },
  "@keyframes fade-in": {
    ['100%']: { opacity: 1, }
  },
  "@keyframes fade-out": {
    ['100%']: { opacity: 0 }
  },
  fadeIn: ({ duration = 1000, delay = 0 }) => ({
    opacity: 0,
    animationName: `$fade-in`,
    animationDuration: duration,
    animationDelay: delay,
    animationFillMode: 'forwards'
  }),
  fadeOut: ({ duration = 1000, delay = 0 }) => ({
    animationName: `$fade-out`,
    animationDuration: duration,
    animationDelay: delay,
    animationFillMode: 'forwards'
  }),
});