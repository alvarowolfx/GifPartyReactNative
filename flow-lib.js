'use strict';

/* eslint no-unused-vars:0 */
declare var describe: (name: string, callback: () => void) => void;
declare var it: (name: string, callback: (done: () => void) => void) => void;
declare var expect: any;
declare var afterEach: (callback: () => void) => void;

declare module 'react-native-vector-icons' {
  declare var exports: any;
}

declare module 'react-native-gifted-spinner' {
  declare var exports: any;
}

declare module 'react-native-router-flux' {
  declare var exports: any;
}
