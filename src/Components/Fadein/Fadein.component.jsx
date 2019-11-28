/**
 * Fadein Animation Component that render children with slide show effect
 * @export
 * @param {SlideshowProps} props The props for `<Fadein />`.
 * @returns {JSX.Element} The `<Fadein />` component.
 */
 
import React, { useState, useEffect } from 'react';
import { useFadeinStyles } from './Fadein.component.styles';

const Fadein = ({children, show, animation}) => {
  const { duration, delay } = animation || {};
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    // if (!show) setRender(false);
  }; 

  const classes = useFadeinStyles({duration, delay: delay * 1000});
    return (
      shouldRender && (
        <div 
          className={show ? classes.fadeIn : classes.fadeOut} 
          onAnimationEnd={onAnimationEnd}>
          {children}
        </div>
    )
  )
};

export default Fadein;