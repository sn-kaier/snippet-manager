import * as admin from 'firebase-admin'
import {auth} from 'firebase-functions'
import UserRecord = admin.auth.UserRecord;
import { client } from './graphql/graphql_client';
import { addUser } from './graphql/mutations';

try {
  admin.initializeApp();
} catch (e) {}

// On sign up.
exports.processSignUp = auth.user().onCreate(async (user: UserRecord) => {
  console.log(user);

  await client.request(addUser, {
    uid: user.uid,
    name: user.displayName,
    photoURL: user.photoURL
  });

  // Check if user meets role criteria:
  // Your custom logic here: to decide what roles and other `x-hasura-*` should the user get
  let customClaims;
  if (user.email && user.email === 'javaeru@gmail.com') {
    customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'admin',
        'x-hasura-allowed-roles': ['user', 'admin'],
        'x-hasura-user-id': user.uid
      }
    };
  }
  else {
    customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'user',
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-user-id': user.uid
      }
    };
  }
  // Set custom user claims on this newly created user.
  return admin.auth().setCustomUserClaims(user.uid, customClaims)
    .then(() => {
      // Update real-time database to notify client to force refresh.
      const metadataRef = admin.database().ref("metadata/" + user.uid);
      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      return metadataRef.set({refreshTime: new Date().getTime()});
    })
    .catch(error => {
      console.log(error);
    });
});
