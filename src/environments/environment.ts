// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



// src/environments/environment.ts
// used when we run `ng serve` or `ng build`
export const environment = {
  production: false,
  // URL of development API
  apiUrl: 'http://ec2-3-17-207-172.us-east-2.compute.amazonaws.com:8080/todos'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
