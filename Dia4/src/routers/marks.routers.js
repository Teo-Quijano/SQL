const { Router } = require("express");
const router = Router();
const notaCtrl = require("../controller/marks.controller");

router.get("/marks", notaCtrl.getNota);
router.post("/marks", notaCtrl.postNota);
router.put("/marks", notaCtrl.putNota);
router.delete("/marks", notaCtrl.deleteNota);

module.exports = router;