const router = require("express").Router();
const fs = require("fs");


router.get("/notes", (req, res) => {
    const input = fs.readFileSync("./Develop/db/db.json");
    res.json(JSON.parse(input));
})

router.post("/notes", (req, res) => {
    const input = JSON.parse(fs.readFileSync("./Develop/db/db.json"));
    const enterNotes = req.body;
    enterNotes.id = uuid.v4();
    input.push(enterNotes);
    fs.writeFileSync("./Develop/db/db,json", JSON.stringify(input));
    res.json(input);
})


module.exports = router;