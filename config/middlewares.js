module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'"],
          "connect-src": [
            "'self'",
            "https:",
            "https://porto-api.jayaintegrasi.id",
            "https://api.emailjs.com",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://porto-api.jayaintegrasi.id",
          ],
          "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          "style-src": ["'self'", "'unsafe-inline'"],
        },
      },
    },
  },
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "http://172.168.1.59:5173",
        "http://172.168.1.59",
        "http://192.168.100.116:5173",
        "http://172.19.0.1:5173",
        "http://172.22.80.1:5173",
        "https://jin-compro-fe.vercel.app",
        "https://jayaintegrasi.id",
        "https://www.jayaintegrasi.id",
        "http://192.168.100.12:5173",
        "http://192.168.100.12",
        "http://192.168.1.21:5173",
      ],
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
