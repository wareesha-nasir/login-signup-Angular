// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Import the functions you need from the SDKs you need
 // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
   firebase : {
    apiKey: "AIzaSyAHsorhwiCA3NpxMfyqkVirpwMKiPY73F8",
    authDomain: "angular-firebase-auth-8ca95.firebaseapp.com",
    projectId: "angular-firebase-auth-8ca95",
    storageBucket: "angular-firebase-auth-8ca95.appspot.com",
    messagingSenderId: "1015186499750",
    appId: "1:1015186499750:web:9bdccdd051aa2fde3d6c67"
  }

  // Initialize Firebase
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
