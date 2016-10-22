<p align="center"><img height="180px" width="180px" src="https://github.com/fabric-8/borg/raw/master/assets/borg_mascot.png" alt=""></p>

BORG - Website
===
___

## To Install

    # git clone $THIS_REPO
    npm install
    
## To Run

    npm start
    
## Tests

    npm test

## Architecture

### JS / TS

**All JavaScript lives in `./app`.**

For a simple Component example, visit `./app/Welcome/Component.tsx`. For a more comprehensive example of a connected component, visit `./app/Shared/Notification`.

To introduce a new Reducer, remember to add it into `./app/configureStoreAndHistory.ts` (following the NotificationReducer example).

### CSS / Sass

**All CSS lives in `./public/css`.**

The Sass project is built on top of Google Material Design (`./public/css/src/vendor/materialize-src`), however all custom styling is located in the root of `./public/css/src`.

In order to compile sass and minify the resulting css, run

    npm run compile:sass && npm run clean:css
    
When developing, I suggest running

    npm run watch:sass
    
in a separate shell so CSS is emitted whenever a `.sass` or `.scss` file is changed.