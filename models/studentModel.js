const db = require('../config/db');


const insertStudent = async (
    sid,
    kindergarten,
    total_kindergarten_students,
    female_kindergarten_students,
    grade1,
    total_grade1,
    female_grade1,
    grade2,total_grade2,	
    female_grade2	
    ,grade3,
    total_grade3,	
    female_grade3,	
    grade4,
    total_grade4,
    female_grade4,
    grade5,
    total_grade5,
    female_grade5,
    grade6,
    total_grade6,
    female_grade6,
) => {
    const query = `INSERT INTO tblstudent (
    sid,
    kindergarten, total_kindergarten_students, female_kindergarten_students,
    grade1, total_grade1, female_grade1,
    grade2, total_grade2, female_grade2,
    grade3, total_grade3, female_grade3,
    grade4, total_grade4, female_grade4,
    grade5, total_grade5, female_grade5,
    grade6, total_grade6, female_grade6
) VALUES (
    ?,
    ?, ?, ?,  
    ?, ?, ?,  
    ?, ?, ?,  
    ?, ?, ?,  
    ?, ?, ?,  
    ?, ?, ?,  
    ?, ?, ?   
);
`
    const values = [ 
        sid,
        kindergarten, total_kindergarten_students, female_kindergarten_students,
        grade1, total_grade1, female_grade1,
        grade2, total_grade2, female_grade2,
        grade3, total_grade3, female_grade3,
        grade4, total_grade4, female_grade4,
        grade5, total_grade5, female_grade5,
        grade6, total_grade6, female_grade6
    ];
    const [result] = await db.promise().query(query,values);
    return result;
}


const getStudentData = async (sid) => {
    const query = `SELECT * FROM tblstudent WHERE sid = ?`;
    const [result] = await db.promise().query(query,[sid]);
    return result;
}

module.exports = {insertStudent,getStudentData}