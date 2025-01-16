export default ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"), // Используется для токенов аутентификации
    },
  },
});
