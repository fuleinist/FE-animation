/**
 * Slidein Animation Component that render children with slide show effect
 * @export
 * @param {SlideshowProps} props The props for `<Slidein />`.
 * @returns {JSX.Element} The `<Slidein />` component.
 */
 
import React, { useState, useEffect } from 'react';
import { useSlideinStyles } from './Slidein.component.styles';

const Slidein = ({children, show, animation}) => {
  const { duration, delay, side } = animation || {};
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    const delayedEffect = async () => {
      if( typeof delay === 'function' && delay.constructor.name === 'AsyncFunction') {
        await delay();
        setRender(true);
      } else {
        setRender(true);
      }
    }
    delayedEffect();
  }, [show]);

  const onAnimationEnd = () => {
    // if (!show) setRender(false);
  }; 

  const classes = useSlideinStyles({duration, delay: delay * 1000, side});
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