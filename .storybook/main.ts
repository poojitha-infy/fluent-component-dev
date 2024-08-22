import type { StorybookConfig } from "@storybook/angular";
const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  webpackFinal: async (config) => {
    // Ensure config.module is defined
    if (!config.module) {
      config.module = { rules: [] };
    }
    // Add CSS loader rule
    if(config.module.rules) {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
      });
    }
    return config;
  },
};
export default config;
