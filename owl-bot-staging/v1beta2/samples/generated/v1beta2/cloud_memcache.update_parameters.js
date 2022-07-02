// Copyright 2022 Google LLC
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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(name, updateMask) {
  // [START memcache_v1beta2_generated_CloudMemcache_UpdateParameters_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the Memcached instance for which the parameters should be
   *  updated.
   */
  // const name = 'abc123'
  /**
   *  Required. Mask of fields to update.
   */
  // const updateMask = {}
  /**
   *  The parameters to apply to the instance.
   */
  // const parameters = {}

  // Imports the Memcache library
  const {CloudMemcacheClient} = require('@google-cloud/memcache').v1beta2;

  // Instantiates a client
  const memcacheClient = new CloudMemcacheClient();

  async function callUpdateParameters() {
    // Construct request
    const request = {
      name,
      updateMask,
    };

    // Run request
    const [operation] = await memcacheClient.updateParameters(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateParameters();
  // [END memcache_v1beta2_generated_CloudMemcache_UpdateParameters_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
