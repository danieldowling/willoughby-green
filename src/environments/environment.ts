// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  indeed: '719253724258089',
  google: 'AIzaSyDAPdr16ss-w4LN1hQ4clH-N9pioDCmt8Y',
  firebase: {
    //initialize JWPro firebase project
    apiKey: 'AIzaSyDxGXzdT9qt7Fp5rl0lgyvoLmWLTLOrze8',
    authDomain: 'jobwalkerpro.firebaseapp.com',
    databaseURL: 'https://jobwalkerpro.firebaseio.com',
    projectId: 'jobwalkerpro',
    storageBucket: '',
    messagingSenderId: '411968017926'
  }
};
