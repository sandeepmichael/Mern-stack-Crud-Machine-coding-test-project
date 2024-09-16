const router = require('express').Router()
const multer = require('multer')
const employee = require('../models/employeeModel')


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        return cb(null, './client/src/assets')
    },
     filename : function(req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)

     }
})
const upload = multer({storage});



router.post('/createemployee', upload.single('file'), async (req, res) => {
    const{name, email, phno, designation, gender, course} = req.body;
    const image = req.file.filename;
    let duplicateemployee = await employee.findOne({email})
    if(duplicateemployee){
        res.status(400).json({message:'employee with this email already exists'})

    }
    try {
        const employeelist = new employee({
            name,
            email,
            phno,
            designation,
            gender,
            course,
            image,
        })
        await employeelist.save();
        res.send('employee added successfully');
    } catch (error) {
        return res.status(400).json({error})
    }
})


router.get('/getemployeedetails', async(req, res) => {
    try {
        const alldetails = await employee.find();
        console.log(alldetails);
        res.json(alldetails);
        
    } catch (error) {
        return res.status(400).json({error})
    }
})

router.get('/getemployee/:id', async(req, res) => {
    const id = req.params.id;
    try {
       const user =  await employee.findById({_id:id})
       res.json(user);

        
    } catch (error) {
        return res.status(400).json({error})
    }
})

router.put('/updateemployee/:id', upload.single('file'), async(req, res) => {
    const id = req.params.id;
    try {
        const updateduser = await employee.findByIdAndUpdate({_id:id},
            {
                name:req.body.name,
                email:req.body.email,
                gender:req.body.gender,
                course:req.body.course,
                phno:req.body.phno,
                designation:req.body.designation,
                image:req.file.filename,

            }
        )
        res.json(updateduser);
       // res.send('employee updated successfully')
        
    } catch (error) {
     //  return res.status(400).json({error})
       res.status(500).send();
    }

})

router.delete('/delete/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const deletedemployee = await employee.findByIdAndDelete({_id:id})
        res.json(deletedemployee);
        
    } catch (error) {
        res.status(500).send();
    }
})


module.exports = router;