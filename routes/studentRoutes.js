const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { addStudent,showStudent } = require('../controllers/studentController');

const router = express.Router();


router.post('/addstudent',authenticateToken,addStudent);
router.get('/showstudentdata',authenticateToken,showStudent);

module.exports = router;
