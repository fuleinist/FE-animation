import {createUseStyles} from 'react-jss'

export const useFadeinStyles = createUseStyles({
  root: {
    overflow: 'hidden'
  },
  "@keyframes fade-in": {
    ['100%']: { opacity: 1, }
  },
  "@keyframes fade-out": {
    ['100%']: { opacity: 0 }
  },
  fadeIn: ({ duration = 1000, delay = 0 }) => ({
    opacity: 0,
    position: 'static',
    animationName: `$fade-in`,
    animationDuration: duration,
    animationDelay: delay,
    animationFillMode: 'forwards'
  }),
  fadeOut: ({ duration = 1000, delay = 0 }) => ({
    animationName: `$fade-out`,
    position: 'static',
    animationDuration: duration,
    animationDelay: delay,
    animationFillMode: 'forwards'
  }),
});