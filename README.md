# Voice Theme
Default theme for [Confetti](https://github.com/andreamangano/confetti-cli), a tool for enriching your online speaker decks.

## Preview
![cover](/screens/cover.jpg)

## Install
It is provided by default when you initialise a new slide deck using [Confetti CLI](https://github.com/andreamangano/confetti-cli).

Execute the `` clone `` command under your Confetti `` deck folder `` whether it
 wasn't present inside the `` path-to-your-deck/themes/ `` folder:

``` bash
https://github.com/andreamangano/confetti-theme-voice.git themes/voice
```

Be sure that the theme has been installed by checking into `` path-to-your-deck/themes/ `` folder. It should go under the name `` voice ``.

Then modify the property theme of the file `` path-to-your-deck/settings.yml
`` to `` theme: voice `` in order to enable the theme.

``` yaml
theme: voice
```

## Update
Execute the following commands to update the theme:

``` bash
cd themes/voice
git pull
npm install
```

## Uninstall
For removing the theme from your current slide deck just run the following commands:

``` bash
cd themes
rm -rf voice
```

## Features
* Mobile friendly
* Keyboard navigation

## Configs
It's possible to choose the primary theme colour by adding the property
``` themeConfig ``` to your `` path-to-your-deck/settings.yml `` file as
described below:

``` yaml
themeConfig:
  # Place your favourite color here to customize the theme
  colors:
    primary: '#1C9383'
```

## Third party libraries
* [Super GiGi](https://github.com/Objectway/super-gigi) (for the layout grid).

## Copyright
Theme designed and developed by [Andrea Mangano](https://github.com/andreamangano), powered by [Confetti](https://github.com/andreamangano/confetti-cli).