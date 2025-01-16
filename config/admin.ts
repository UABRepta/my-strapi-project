export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"), // Секрет для админки
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"), // Соль для API токенов
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"), // Соль для токенов передачи данных
    },
  },
});
