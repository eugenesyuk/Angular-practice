export const environment = {
  production: true,
  apiUrl: 'https://angular-app-fb87f.firebaseapp.com/',
  endpoints: {
    FAKELOGIN: {
      GET: '/assets/api/empty.json',
      USERNAME: 'eugenesyuk@gmail.com',
      PASSWORD: 'qwerty'
    },
    TOKEN: {
      GET: '/assets/api/token.json'
    },
    FOLLOWERS: {
        GET: '/assets/api/followers.json'
    },
    POSTS: {
        GET: '/assets/api/posts.json'
    }
  }
};
