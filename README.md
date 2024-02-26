# Bingo

Serving the current and older OoT Bingo versions through GitHub Pages

## Development

Browser have restricted local development, so loading files from HTML no longer
works. For easy development, there is a server that will staticly host your
files. You will need to install [Node](https://nodejs.org) to run it

```
cd server
npm install
npm start
```

Then navigate to http://localhost:3000/bingo/

## Localization

Bingo is currently only completely supported in English. There is a full translation of goals in Japanese, but the UI is still English.

If you want to help translate into your language, download [the English strings file](/localization/en.js) and replace its values with your translations. If you remove strings, they will default to English. For an example of what the file should look like, see [the Japanese strings file](/localization/jp.js).

Once you are finished, share that file in the Discord or make a Pull Request here.
