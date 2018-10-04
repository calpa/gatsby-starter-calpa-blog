module.exports = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.contextReplacement(
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${['javascript', 'bash'].join('|')})$`),
      ),
    ],
  });
};
