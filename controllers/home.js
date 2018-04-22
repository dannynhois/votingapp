exports.index = (req, res) => {
  res.render("../views/home", { title: "Hello Poll" });
};
