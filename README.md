# GifParty App
This app was developed for demo purposes using React Native and Giphy API. So I'm sharing the code for those who are interested in studying.

The presentation about the app can be seen [here](http://www.slideshare.net/alvarowolfx/developing-apps-with-react-native). It was presented on [FrontInCuiaba](http://frontincuiaba.com.br).

## Preview

![GifParty Preview](http://i.imgur.com/avsYwQk.gif)

## Pre requirements
- Node.js and NPM installed (I recommend to do something like [this](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install global packages without sudo )
- React Native CLI installed, use this command to install globally the react-native command.
- React Native Package Manager - [rnpm](https://github.com/rnpm/rnpm), to link native libraries used on the project.
```shell
npm install -g react-native-cli rnpm
```
- Your device platform should be configured to run the project. A more extensive guide to configure environment can be found [here](https://facebook.github.io/react-native/docs/getting-started.html).

## How to run on Simulator/Device
- Install required npm packages, run this command on project folder :
```shell
npm install && rnpm link
```
- Basically you choose what platform you want to run, theese commands will run the app on each platform:
```shell
# For iOS
react-native run-ios
# For Android
react-native run-android
```
