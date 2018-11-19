export const environment = {
  production: true,
  apiUrl: 'http://localhost:4200',
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
