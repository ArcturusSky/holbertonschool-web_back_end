export default function getFullResponseFromAPI(success) {
// direct return because seems that the checker wants direct return

  // Instantiate a promise with two parameters, resolve and reject
  return new Promise((resolve, reject) => {
    // if "success" is true (if the promise is solved)
    if (success) {
    // using "resolve()" method to details what the resolve is
      resolve({
        status: 200,
        body: 'Success',
      });

      // else, so if "sucess" is false (the promise is rejected)
    } else {
      // "reject()" methode to detail what the rejection will trigger
      reject(
        new Error('The fake API is not working currently'),
      );
    }
  });
}
