/**
 * Slidein Animation Component that render children with slide show effect
 * @export
 * @param {SlideshowProps} props The props for `<Slidein />`.
 * @returns {JSX.Element} The `<Slidein />` component.
 */
 
import React from 'react';
import { useSlideinStyles } from './Slidein.component.styles';
import { propTypes, defaultProps } from './Slidein.component.props'

import { useDelayedRender } from '../../Hooks/UseDelayedRender/UseDelayedRender.hook';

const Slidein = ({children, show, animation}) => {
  const { duration, delay, side } = animation || {};
  const [shouldRender] = useDelayedRender(show, delay);

  const onAnimationEnd = () => {
    // if (!show) setRender(false);
  }; 

  const classes = useSlideinStyles({duration, delay: delay * 1000, side});
    return (
      shouldRender ? (
        <div className={classes.root}>
          <div
            className={show ? classes.slideIn : classes.slideOut} 
            onAnimationEnd={onAnimationEnd}>
            {children}
          </div>
        </div>
    ) : null
  )
};

Slidein.propTypes = propTypes;
Slidein.defaultProps = defaultProps;

export default Slidein;