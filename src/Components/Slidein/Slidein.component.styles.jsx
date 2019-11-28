import {createUseStyles} from 'react-jss'

const SLIDETRANSFORM = {
  left: `translateX(-100%)`,
  right: `translateX(100%)`,
  top: `translateY(100%)`,
  bottom: `translateY(-100%)`,
}

export const useSlideinStyles = createUseStyles({
  root: {
  },
  "@keyframes slide-in": {
    ['100%']: { transform: `translateX(0%)` }
  },
  "@keyframes slide-out-left": {
    ['100%']: { transform: `translateX(-50vw)` }
  },
  "@keyframes slide-out-right": {
    ['100%']: { transform: `translateX(50vw)` }
  },
  "@keyframes slide-out-top": {
    ['100%']: { transform: `translateY(50vh)` }
  },
  "@keyframes slide-out-bottom": {
    ['100%']: { transform: `translateY(-50vh)` }
  },
  slideIn: ({ duration = 1000, delay = 0, side = 'left' }) => ({
    transform: SLIDETRANSFORM[side] || SLIDETRANSFORM.left,
    animationName: `$slide-in`,
    animationDuration: duration,
    animationDelay: delay,
    animationFillMode: 'forwards'
  }),
  slideOut: ({ duration = 1000, delay = 0, side = 'left' }) => ({
    animationName: `$slide-out-${side}`,
    animationDuration: duration,
    animationDelay: delay,
    animationFillMode: 'forwards'
  }),
});