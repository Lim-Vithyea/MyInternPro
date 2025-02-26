const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { addStudent,showStudent,showCountedStudent } = require('../controllers/studentController');

const router = express.Router();


router.post('/addstudent',authenticateToken,addStudent);
router.get('/showstudentdata',authenticateToken,showStudent);
router.get('/countedstudent',authenticateToken,showCountedStudent);

module.exports = router;
