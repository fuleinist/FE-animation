/**
 * UseDelayedRender Hook to integrate with mount and unmount annimations
 * @export
 * @param {boolean} show trigger to show or hide`.
 * @param {boolean | Function} delay the time in ms or async callback function to trigger render effect`.
 * @returns {Array<boolean, React.Dispatch<boolean>>}
 */

import { useState, useEffect } from 'react';

export const useDelayedRender = (show, delay) => {
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

  return [shouldRender, setRender];
};