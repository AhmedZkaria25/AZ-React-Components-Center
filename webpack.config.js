module.exports = {
  module: {
    rules: [
      {
        resourceQuery: /raw/, // 👈 only when ?raw is used
        type: "asset/source",
      },
      {
        test: /\.jsx$/,
        use: "raw-loader",
      },
    ],
  },
};