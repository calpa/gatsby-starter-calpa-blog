const fs = require('fs');
const getPosts = require('../gatsby/getPosts');

const createConfigFile = async () => {
  const { data } = await getPosts('configuration');

  // TODO: Validate the configJSON
  const configJSON = data.items[0].fields.blog || {};

  // console.log('current config');

  // console.log(configJSON);
  try {
    await fs.writeFile('./data/secret/config.json', JSON.stringify(configJSON));
  } catch (err) {
    console.error(err);
  }
};

createConfigFile();
