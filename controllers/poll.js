exports.index = (req,res) => {
    res.send("poll index");
}

exports.create = (req,res) => {
    res.render("../views/polls/create", {title:"Create New Poll"});
}

exports.postCreate = (req,res) => {
    res.send(req.body);
}