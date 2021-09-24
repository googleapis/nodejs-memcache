// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name) {
  // [START memcache_v1_generated_CloudMemcache_ApplyParameters_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the Memcached instance for which parameter group updates
   *  should be applied.
   */
  // const name = 'abc123'
  /**
   *  Nodes to which we should apply the instance-level parameter group.
   */
  // const nodeIds = 'abc123'
  /**
   *  Whether to apply instance-level parameter group to all nodes. If set to
   *  true, will explicitly restrict users from specifying any nodes, and apply
   *  parameter group updates to all nodes within the instance.
   */
  // const applyAll = true

  // Imports the Memcache library
  const {CloudMemcacheClient} = require('@google-cloud/memcache').v1;

  // Instantiates a client
  const memcacheClient = new CloudMemcacheClient();

  async function applyParameters() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await memcacheClient.applyParameters(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  applyParameters();
  // [END memcache_v1_generated_CloudMemcache_ApplyParameters_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
