module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c1a61a218ef3234b24055c0817bef55'),
  },
});
