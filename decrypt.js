// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

module.exports = async function decrypt(
  projectId = '', // Your GCP projectId
  keyRingId = '', // Name of the crypto key's key ring
  cryptoKeyId = '', // Name of the crypto key, e.g. "my-key"
  ciphertextFileName = '',
  plaintextFileName = ''
) {
  const fs = require('fs');
  const {promisify} = require('util');

  // Import the library and create a client
  const kms = require('@google-cloud/kms');
  const client = new kms.KeyManagementServiceClient();

  // The location of the crypto key's key ring, e.g. "global"
  const locationId = 'global';

  // Reads the file to be decrypted
  const readFile = promisify(fs.readFile);
  const contentsBuffer = await readFile(ciphertextFileName);
  const name = client.cryptoKeyPath(
    projectId,
    locationId,
    keyRingId,
    cryptoKeyId
  );

  client.getCryptoKey({name: name})
  .then(responses => {
    var response = responses[0];

  })
  .catch(err => {
    console.error(err);
  });

  
  const ciphertext = contentsBuffer.toString('base64');

  // Decrypts the file using the specified crypto key
  const [result] = await client.decrypt({name, ciphertext});

  // Writes the decrypted file to disk
  const writeFile = promisify(fs.writeFile);
  await writeFile(plaintextFileName, Buffer.from(result.plaintext, 'base64'));
  console.log(
    `Decrypted ${ciphertextFileName}, result saved to ${plaintextFileName}.`
  );
}
// [END kms_decrypt]
