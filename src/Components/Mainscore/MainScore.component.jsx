/**
 * MainScore Component
 * @export
 * @param {MainScoreProps} props The props for `<MainScore />`.
 * @returns {JSX.Element} The `<MainScore />` component.
 */

import React from 'react'
import { useMainScoreStyles } from './MainScore.component.styles'
import { propTypes, defaultProps } from './MainScore.component.props'

import Slidein from '../Slidein/Slidein.component'
import Scorebox from '../Scorebox/Scorebox.component'

const MainScore = ({show, mainscores, delay}) => {
  const classes = useMainScoreStyles();
  const {teamHome, teamAway, scores} = mainscores || {};
  return (
    <div className={classes.root}>
      <Slidein show={show} animation={{delay: delay + 1, side: 'right'}}>
        <Scorebox text={teamHome || ''} color='Red'/>
      </Slidein>
      <Slidein show={show} animation={{delay: delay + 0.5, side: 'bottom'}}>
        <Scorebox text={scores || ''} color='Red'/>
      </Slidein>
      <Slidein show={show} animation={{delay: delay + 1, side: 'left'}}>
        <Scorebox text={teamAway || ''} color='Blue'/>
      </Slidein>
    </div>
  )
}

MainScore.propTypes = propTypes;
MainScore.defaultProps = defaultProps;

export default MainScore;