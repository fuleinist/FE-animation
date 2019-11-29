import {createUseStyles} from 'react-jss'

export const useScoreboxStyles = createUseStyles({
  root: ({color}) => ({
    fontSize: '20px',
    lineHeight: '1.5',
    backgroundColor: color,
    color: '#fff',
    padding: '5px 15px'
  })
});