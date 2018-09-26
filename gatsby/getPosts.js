const axios = require('axios');

const API_BASE_URL = 'https://cdn.contentful.com';
const { API_SPACE_ID, API_TOKEN } = require('../data/config').contentful;

// Get All Post from Contentful
const getPosts = async (contentType) => {
  const order = '-fields.createdDate';
  const POST_URL = `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries`;
  const res = await axios
    .get(POST_URL, {
      params: {
        order,
        content_type: contentType,
        access_token: API_TOKEN,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return res;
};

module.exports = getPosts;
