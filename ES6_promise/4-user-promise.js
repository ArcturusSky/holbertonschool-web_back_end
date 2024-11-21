export default function signUpUser(firstName, lastName) {
  return new Promise(((resolve) => {
    const resolved = true;
    if (resolved) {
      resolve({
        firstName: `${firstName}`,
        lastName: `${lastName}`,
      });
    }
  }));
}
