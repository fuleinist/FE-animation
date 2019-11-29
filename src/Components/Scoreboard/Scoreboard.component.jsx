/**
 * Scoreboard Component
 * @export
 * @param {SlideshowProps} props The props for `<Scoreboard />`.
 * @returns {JSX.Element} The `<Scoreboard />` component.
 */
 
import React, { useState } from 'react'
import { useScoreboardStyles } from './Scoreboard.component.styles'
import { propTypes, defaultProps } from './Scoreboard.component.props'

import Mainscore from '../Mainscore/Mainscore.component'
import TeamStat from '../TeamStat/TeamStat.component'

const animations = [
  {animation: 'main', delay: 0},
  {animation: 'teamStat', delay: 2},
]

const scoreboardDetails = {
  mainscores: {
    teamHome: 'KC',
    teamAway: 'GG',
    scores: '0 - 4'
  },
  teamstats: {
    team: 'Kingston City',
    stats: 'Red Card'
  }
}

const Scoreboard = () => {
  const classes = useScoreboardStyles();
  const [show, setShow] = useState([!!animations[0], !!animations[1]]);
  const {mainscores, teamstats} = scoreboardDetails;
  return (
    <div className={classes.root}>
      <Mainscore show={show[0]} delay={animations[0].delay || 0} mainscores={mainscores}/>
      <TeamStat show={show[1]} delay={animations[1].delay || 0} teamstats={teamstats}/>
      <button onClick={()=>setShow([!show[0], show[1]])}>{!show[0] ? 'Show MainScores' : 'Hide MainScores'}</button>
      <button onClick={()=>setShow([show[0], !show[1]])}>{!show[1] ? 'Show TeamStat' : 'Hide TeamStat'}</button>
    </div>
  )
}

Scoreboard.propTypes = propTypes;
Scoreboard.defaultProps = defaultProps;

export default Scoreboard;