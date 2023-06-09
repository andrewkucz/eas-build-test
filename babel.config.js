// Don't forget to specify your TAMAGUI_TARGET here or ideally in the command to run / .env files
process.env.TAMAGUI_TARGET = "native";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // NOTE: this is required to pass the right environment
      [
        "transform-inline-environment-variables",
        {
          include: "TAMAGUI_TARGET",
          exclude: [
            "EXPO_ROUTER_APP_ROOT",
            "EXPO_ROUTER_PROJECT_ROOT",
            "EXPO_ROUTER_IMPORT_MODE",
            "EXPO_ROUTER_IMPORT_MODE_ANDROID",
            "EXPO_ROUTER_IMPORT_MODE_IOS",
            "EXPO_ROUTER_IMPORT_MODE_WEB",
          ]
        },
      ],
      // NOTE: this is optional, you don't *need* the compiler
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
        },
      ],
      [require.resolve('babel-plugin-module-resolver'),
        {
          root: ["./"],
          alias: {
            "~": "./"
          }
        }
      ],
      // NOTE: this is only necessary if you are using reanimated for animations
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
    ],
  };
}
