exports.handler = (event, context, callback) => {
  const { headers } = event;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(headers),
  });
};

