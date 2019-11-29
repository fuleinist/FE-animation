# FE-animation

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. (TBD) <br />

## Specification
Create a single page which renders a graphic overlay. The overlay will be a react component.
This will be called the Scoreboard.
The Scoreboard component will take an animation prop (default = []) in order to trigger and
control the transitions(animate) between states.
The 3 valid states are
hidden (animation = []),
showing main section (animation = [ { animation: ‘main’, delay: 0 } ]) and
showing main + teamStat section (animation = [ { animation: ‘main’, delay: 0 }, { animation:
‘teamStat’, delay: 0.6 } ])

## The ideal implementation will
- provide props for setting the colors of the home and away team elements.
- be able to respond dynamically to changes in the animation prop to show and hide the
specific sections of the graphic at will.
- gracefully handle changes to the animation prop mid animation.
- animate reliably and performantly
