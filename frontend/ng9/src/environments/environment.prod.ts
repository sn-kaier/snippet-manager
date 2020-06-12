import { googlApiKey } from './config.local';

export const environment = {
  production: true,
  gqlUrl: 'https://snippeter.net/hasura',
  firebase: {
    apiKey: googlApiKey,
    authDomain: 'snippeter-eddf3.firebaseapp.com',
    databaseURL: 'https://snippeter-eddf3.firebaseio.com',
    projectId: 'snippeter',
    storageBucket: 'snippeter.appspot.com',
    messagingSenderId: '710864936160',
    appId: '1:710864936160:web:801b66376bc6e728'
  }
};
