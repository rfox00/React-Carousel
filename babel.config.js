const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
  "@babel/preset-react",
  "@babel/preset-typescript",
];

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread"
];

module.exports = { presets, plugins };