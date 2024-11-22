import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // "uploadPhoto" and "createUser" with their "()" because
  // calling the function to have their result
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      // "photoResponse" and "userResponse" are name given
      // promises's results that I have to select the attribute I want of the response.
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
