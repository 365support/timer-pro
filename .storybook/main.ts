import type { StorybookConfig } from "@storybook/nextjs";
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const path = require("path");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");

    config.plugins = config.plugins || [];
    config.plugins.push(new VanillaExtractPlugin());

    return config;
  },
};
export default config;
