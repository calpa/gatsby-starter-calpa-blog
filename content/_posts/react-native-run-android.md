---
title: 【React Native】安裝Android Apk而無需連接伺服器的方法
date: 2017-04-11 17:41
tags:
  - React Native
---

正常情況下，我們會用命令`react-native run-android`來在自己的電話中測試app，但是這個方法需要連接電腦。

我們可以利用以下命令：
```
react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

cd android
./gradlew assembleDebug
```

## 參考資料
1. [Build and Install unsigned apk on device without the development server? - stackoverflow](http://stackoverflow.com/questions/35283959/build-and-install-unsigned-apk-on-device-without-the-development-server)
