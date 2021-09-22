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

function main(instance) {
  // [START memcache_apply_software_update_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the Memcached instance for which software update should be
   *  applied.
   */
  // const instance = 'abc123'
  /**
   *  Nodes to which we should apply the update to. Note all the selected nodes
   *  are updated in parallel.
   */
  // const nodeIds = 'abc123'
  /**
   *  Whether to apply the update to all nodes. If set to
   *  true, will explicitly restrict users from specifying any nodes, and apply
   *  software update to all nodes (where applicable) within the instance.
   */
  // const applyAll = true

  // Imports the Memcache library
  const {CloudMemcacheClient} = require('@google-cloud/memcache').v1beta2;

  // Instantiates a client
  const memcacheClient = new CloudMemcacheClient();

  async function applySoftwareUpdate() {
    // Construct request
    const request = {
      instance,
    };

    // Run request
    const [operation] = await memcacheClient.applySoftwareUpdate(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  applySoftwareUpdate();
  // [END memcache_apply_software_update_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
