/**
 * Scorebox Component
 * @export
 * @param {ScoreboxProps} props The props for `<Scorebox />`.
 * @returns {JSX.Element} The `<Scorebox />` component.
 */
 
import React from 'react'
import { useScoreboxStyles } from './Scorebox.component.styles'
import { propTypes, defaultProps } from './Scorebox.component.props'

const Scorebox = ({text, color, styles}) => {
  const classes = useScoreboxStyles({color});
  return (
    <div className={classes.root} styles={styles}>
      {text}
    </div>
  )
}

Scorebox.propTypes = propTypes;
Scorebox.defaultProps = defaultProps;

export default Scorebox;