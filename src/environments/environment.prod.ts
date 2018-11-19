export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAQ0MgJtBfiTjJ2P3Tk_754q4DxcpGKmRo",
    authDomain: "database-example-f91b1.firebaseapp.com",
    databaseURL: "https://database-example-f91b1.firebaseio.com",
    projectId: "database-example-f91b1",
    storageBucket: "database-example-f91b1.appspot.com",
    messagingSenderId: "282879053589"
  },
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
        GET: '/followers'
    },
    POSTS: {
        GET: '/posts'
    }
  }
};