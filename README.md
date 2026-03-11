# appium-mydemoapp

Mobile test automation project using [Appium](https://appium.io/docs/en/latest/) and [WebdriverIO](https://webdriver.io/docs/gettingstarted) to run end-to-end tests against the [Sauce Labs](https://saucelabs.com/) Demo App ([Android](https://github.com/saucelabs/my-demo-app-android), [iOS](https://github.com/saucelabs/my-demo-app-ios)) on Android emulators and iOS simulators.

Tests run on [UiAutomator2](https://github.com/appium/appium-uiautomator2-driver) (Android) and [XCUITest](https://github.com/appium/appium-xcuitest-driver) (iOS) drivers, with [Allure](https://allurereport.org/docs/webdriverio/) for HTML reporting and [Appium Inspector](https://github.com/appium/appium-inspector) for element inspection and debugging.

## Prerequisites

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Java JDK](https://img.shields.io/badge/Java_JDK-ED8B00?logo=openjdk&logoColor=white)
![Android SDK](https://img.shields.io/badge/Android_SDK-3DDC84?logo=android&logoColor=white)
![Android Emulator](https://img.shields.io/badge/Android_Emulator-3DDC84?logo=android&logoColor=white)
![Xcode](https://img.shields.io/badge/Xcode-147EFB?logo=xcode&logoColor=white)
![iOS Simulator](https://img.shields.io/badge/iOS_Simulator-000000?logo=apple&logoColor=white)

## Setup

```sh
# This installs Appium, drivers (UiAutomator2 + XCUITest), and WebdriverIO.
npm install
```

## Running Tests

```sh
# Android
npm run test:android

# iOS
npm run test:ios

# Both platforms
npm test

# Generate and open Allure report
npm run report
```
