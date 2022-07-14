# Bingo

Serving the current and older OoT Bingo versions through GitHub Pages

## Checklist upgrading to new bingo version

### Convert to goal list

* Make a copy of the Bingo sheet, add ` (archive)` to the name.
* Protect the archive sheet against editing:
    * `Data > Protected sheets and ranges >  Add a sheet or range > Sheet`
    * Select `Bingo Sheet`
    * Select `Show a warning when editing this range`. This does not prevent editing altogether, but shows a warning
      when someone tries to.
* Rename the original sheet to new version name (e.g. `Bingo sheet v10.3`).
* Take the **id** and **gid** of the original sheet from the url (`...spreadsheets/d/{id}/edit#gid={gid}`) and paste it
  in the
  following format to
  get the **csv** url: `https://docs.google.com/spreadsheets/d/{id}/export?format=csv&id={id}&gid={gid}`.
* Paste the **csv url** in the [bingo sheet converter](https://bingosync.com/convert) to get the `goal-list.json`.
* Do the same for the **short goal list** sheet. Or if it didn't change, take the short goal list from the old version.

### Frequency balancing & combine

* Use the [balanced bingo](https://github.com/scaramangado/balanced-bingo) script to add weights for frequency balancing
  to the **normal** goal list (short doesn't get balanced).
* Combine the short and balanced normal goal lists into a **combined** goal list
  format (more info on goal list
  format [here](https://github.com/ootbingo/oot-bingo-generator/blob/main/doc/BALANCING.md#the-goal-list)).
* Make sure the version number in the combined goal list is correct (it can appear in multiple places throughout).

### Add to bingo repo

* In your fork of this repo, add a directory with the name of the new version.
* Copy `bingo.html` over from the previous version.
* Place the needed `generator.js` in the folder (can be copied from previous version if there are no changes).
* Paste the combined goal list in the folder as `goal-list.js`.
* In `api/available_versions`, add the new version to `versions` and set the `default_version` to the new version
  as well.
* Make a pull request to the `develop` of the bingo repo and wait for it to be accepted.

### Update oot-bingo-lists package

* Add the combined goal list as `src/bingoLists/{version number}.ts`.
* In `src/index.ts`, import and add the list to `bingoListPerVersion` and update the `latestBingoVersion`.
* Add the new version as a supported version to the README.
* Update the package version in `package.json` and **publish** the package (`npm publish`).

### Changelog

* Once the version is actually live, run the `printChangeLog` function from the `oot-bingo-lists` package to get the
  changelog and put it on the [bingo repo wiki](https://github.com/ootbingo/bingo/wiki/Version-release-notes).

### Announce

* Announce the new version in #bingo, bingbros #announcement and possibly in ongoing Bingo tournament servers.
