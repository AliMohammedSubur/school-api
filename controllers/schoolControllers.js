const school = require("../models/schoolSchema")

const createSchool = (req, res) => {
    const newSchool = new school({
        schoolname: req.body.schoolname,
        location: req.body.location,
        category: req.body.category,
        facilities: req.body.facilities,
        numOfStudents: req.body.numOfStudents,
        address: req.body.address,
        contact:req.body.contact
    })
    newSchool.save();
    res.status(200).json(newSchool)

}

//getting a school
const getSchool = async (req, res) => {
    const school = await school.find();
    res.status(200).json(school);
}
module.exports={createSchool, getSchool}