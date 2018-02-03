module.exports = {
  showWhoAm: (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;

    var data = {
      'ip-address': ip,
      'language': req.headers["accept-language"].split(',')[0],
      'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };

    res.json(data);
  }
};
