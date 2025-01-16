export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("RENDER_EXTERNAL_URL", ""), // <-- Это позволяет Render определить публичный URL
  app: {
    keys: env.array("APP_KEYS"), // Ключи приложения (массив)
  },
});
