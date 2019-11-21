const { Storage } = require('@google-cloud/storage');
require('dotenv/config');

const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID
});

storage
  .getBuckets()
  .then(res => {
    const [buckets] = res;
    console.log(buckets);
  })
  .catch(err => {
    console.error('Error', err.message);
  });
