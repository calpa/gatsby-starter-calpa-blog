const axios = require('axios');
const getMockPosts = require('./getMockPosts');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { API_BASE_URL, API_SPACE_ID, API_TOKEN } = process.env;

// Get All Post from Contentful
const getPosts = async (contentType) => {
  const POST_URL = `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries`;
  const res = await axios
    .get(POST_URL, {
      params: {
        content_type: contentType,
        access_token: API_TOKEN,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return res;
};

if (API_SPACE_ID && API_TOKEN) {
  console.log('has API_SPACE_ID and API_TOKEN');
  module.exports = getPosts;
} else {
  console.log('use mock posts');
  module.exports = getMockPosts;
}
