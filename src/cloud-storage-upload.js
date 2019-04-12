
module.exports = async function uploadFile(bucketName, filename, destination) {
    // [START storage_upload_file]
    // Imports the Google Cloud client library
    try {
    const {Storage} = require('@google-cloud/storage');
  
    // Creates a client
    const storage = new Storage();
  
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    //  const bucketName = 'pwaweathertest.appspot.com';
    //  const filename = './Constants.js';
  
    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filename, {
      // Support for HTTP requests made with `Accept-Encoding: gzip`
      gzip: true,
      destination: destination,
      // By setting the option `destination`, you can change the name of the
      // object you are uploading to a bucket.
      metadata: {
        // Enable long-lived HTTP caching headers
        // Use only if the contents of the file will never change
        // (If the contents will change, use cacheControl: 'no-cache')
        cacheControl: 'public, max-age=31536000',
      },
    });
        
    } catch (error) {
        console.log(error);
        
    }
    
  
    console.log(`${filename} uploaded to ${bucketName}.`);
    // [END storage_upload_file]
  }
