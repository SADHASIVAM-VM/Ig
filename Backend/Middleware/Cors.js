const allowedOrigins = "https://ig-iota-umber.vercel.app/";
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)|| !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = corsOptions;