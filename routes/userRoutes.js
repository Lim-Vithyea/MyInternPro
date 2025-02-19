const express = require('express');
const { createUser, getUserData,showAllUsers,showCountUser,editUserbyID } = require('../controllers/userController');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.post('/insert', createUser);
router.get('/user-data', authenticateToken, getUserData);
router.get('/alluser',showAllUsers);
router.get('/countuser',authenticateToken,showCountUser);
router.patch('/edituser/:id',authenticateToken,editUserbyID);


module.exports = router;
