/**
 * Slidein Animation Component that render children with slide show effect
 * @export
 * @param {SlideshowProps} props The props for `<Slidein />`.
 * @returns {JSX.Element} The `<Slidein />` component.
 */
 
import React, { useState, useEffect } from 'react';
import { useSlideinStyles } from './Slidein.component.styles';

const Slidein = ({children, show, animation}) => {
  const { duration, delay } = animation || {};
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    // if (!show) setRender(false);
  }; 

  const classes = useSlideinStyles({duration, delay: delay * 1000});
    return (
      shouldRender && (
        <div 
          className={show ? classes.slideIn : classes.slideOut} 
          onAnimationEnd={onAnimationEnd}>
          {children}
        </div>
    )
  )
};

export default Slidein;