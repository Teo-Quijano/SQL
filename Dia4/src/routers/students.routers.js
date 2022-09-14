const {Router} = require ("express")
const router = Router();
const alumnoCtrl = require ("../controller/students.controller")

router.get ("/students", alumnoCtrl.getAlumno);
router.post ("/students", alumnoCtrl.postAlumno);
router.put ("/students", alumnoCtrl.putAlumno);
router.delete ("/students", alumnoCtrl.deleteAlumno);

module.exports = router;