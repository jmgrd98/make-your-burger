module.exports = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://make-your-burger-eight.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  };

