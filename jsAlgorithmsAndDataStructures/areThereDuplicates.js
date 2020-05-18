// Frequency Counter
function areThereDuplicates() {
//   const args = [...arguments];
//   const tracker = {};
//   for (let ii = 0; ii < args.length; ii++) {
//       if (tracker[args[ii]] !== undefined ) {
//           return true;
//       } else {
//           tracker[args[ii]] = true;
//       }
//   }
//   return false;
return new Set(arguments).size !== arguments.length
}
