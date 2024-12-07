/*
* This is a check that was created in the users Checkly account and then brought into the CLI project
* To do the same, navigate to your dashboard (home) of your checkly account in the browser. 
* Once there, open up the drop down menu on the right hand side of each check using the button represented by three vertical dots. 
* In the drop down, click the “Export to code” option, download the files and copy them into this .src/__checks__ folder. 
* Repeat this for each check you want to bring into your code.
* 
* Once the tests are in your code, renaming the old ones in the dashboard because they will appear as duplicates when you deploy. 
* Once you know everything is working, delete the old tests. 
* Keep in mind, you can use the timestamp of the first check as a guide if you forget to rename them beforehand. 
*/

import { ApiCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

/*
* Added this import manually to set up an email alert.
* Make sure to configure the ./src/alert-channels.ts according too!
*/
import { emailChannel } from '../alert-channels' 

new ApiCheck('check-from-dashboard', {
  name: 'Check_From_Dashboard',
  alertChannels: [emailChannel], // used import here
  activated: true,
  muted: false,
  shouldFail: false,
  runParallel: true,
  locations: ['us-east-2', 'us-east-1'],
  tags: [],
  frequency: Frequency.EVERY_24H,
  environmentVariables: [],
  maxResponseTime: 20000,
  degradedResponseTime: 5000,
  request: {
    url: 'https://dog.ceo/api/breeds/image/random',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [],
    body: ``,
    bodyType: 'NONE',
    headers: [],
    queryParameters: [],
    basicAuth: {
      username: '',
      password: '',
    },
  },
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 60,
    maxRetries: 2,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
})
