/**
 * Fadein Animation Component that render children with slide show effect
 * @export
 * @param {SlideshowProps} props The props for `<Fadein />`.
 * @returns {JSX.Element} The `<Fadein />` component.
 */
 
import React from 'react';
import { useFadeinStyles } from './Fadein.component.styles';
import { propTypes, defaultProps } from './Fadein.component.props'

import { useDelayedRender } from '../../Hooks/UseDelayedRender/UseDelayedRender.hook';

const Fadein = ({children, show, animation}) => {
  const { duration, delay } = animation || {};
  const [shouldRender] = useDelayedRender(show, delay);

  const onAnimationEnd = () => {
    // if (!show) setRender(false);
  }; 

  const classes = useFadeinStyles({duration, delay: delay * 1000});
    return (
      shouldRender ? (
        <div className={classes.root}>
          <div 
            className={show ? classes.fadeIn : classes.fadeOut} 
            onAnimationEnd={onAnimationEnd}>
            {children}
          </div>
        </div>
    ) : null
  )
};

Fadein.propTypes = propTypes;
Fadein.defaultProps = defaultProps;

export default Fadein;