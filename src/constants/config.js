const envConfig = {
  development: {
    panoptesReturnUrl: 'http://localhost:3000/',
    panoptesAppId: '24ad5676d5d25c6aa850dc5d5f63ec8c03dbc7ae113b6442b8571fce6c5b974c',
  },
  production: {
    panoptesReturnUrl: '?',
    panoptesAppId: '1234',
  },
};

export const config = Object.assign({}, envConfig[process.env.NODE_ENV]);
