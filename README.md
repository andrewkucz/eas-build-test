# eas-build-test

Minimal repro for EAS build issue where "Run fastlane" step gets stuck on `Bundle React Native code and images the transform cache was reset.` and then times out after 45 mins.

Project Details:
- Expo router
- Tamagui theming/styles
- React Native MMKV - native library

Build only started failing when "Expo Router" added and used.