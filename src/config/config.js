'use strict';

exports.NODE_ENV = process.env.NODE_ENV;
exports.PORT = process.env.PORT; 

// Set the HOSTNAME in production for basic CSRF prevention
exports.HOSTNAME = process.env.HOSTNAME;
if (exports.NODE_ENV === 'development' && !exports.HOSTNAME) {
  console.warn('Warn: CSRF checks are disabled in development mode since there is no HOSTNAME environment variable provided');
}
if (exports.NODE_ENV === 'production' && !exports.HOSTNAME) {
  throw new Error('Refusing to boot until you set the HOSTNAME environment variable');
}

if (exports.NODE_ENV === 'development') {
  console.log(exports);
}