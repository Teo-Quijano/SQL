const {Router} = require ("express")
const router = Router();
const mediaCtrl = require ("../controller/notamedia.controller")

router.get ("/notamedia", mediaCtrl.getMedia);

module.exports = router;