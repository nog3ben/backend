function controller(req, res) {
  if (req.method == "POST") {
    index(req, res);
  } else {
    res.send("NOTY FOUND");
  }
}

function index(req, res) {
  res.send("DATA OK");
}

module.exports = controller;
