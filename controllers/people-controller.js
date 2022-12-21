const express = require('express')
const router = express.Router()

//import model (people)
const { People } = require('../models')
console.log(People)
//Routes
// https://localhost:4000/people
router.get('/', async(req, res) => {
    // console.log('post route', req.body)
    // res.status(200).json({message: "People index route"})
    try {
        const allPeople = await People.find({})
        res.status(200).json(allPeople)
    } catch (err){
        res.status(400).json({error: err})
    }
    // try {
    //     const newPerson = await People.create(req.body)
    //     res.status(201).json(newPerson)
    // }catch (err) {
    //     res.status(400).json({error: err})
    // }
})

// https://localhost:4000/people
router.post('/', async(req, res) => {
    //res.status(201).json({message: "People create/post route"})
    try {
        const newPerson = await People.create(req.body)
        res.status(201).json(newPerson)
    }catch (err) {
        res.status(400).json({error: err})
    }
})
//show route
router.get("/:id", async (req, res) => {
	// res.status(200).json({message: "people show route: " + req.params.id })
    try {
        const findPerson = await People.findById(req.params.id)
        res.status(200).json(findPerson)
    }catch (err) {
        res.status(400).json(err)
    }
});
//delete route
router.delete("/:id", async (req, res) => {
    try {
        const deletePerson = await People.findByIdAndDelete(req.params.id)
        res.status(200).json(deletePerson)
    }catch (err) {
        res.status(400).json(err)
    }
	// res.status(200).json({message: "people delete route: " + req.params.id })
});

//put route
router.put("/:id", async (req, res) => {
    try{
                const updatedPeople = await People.findByIdAndUpdate(req.params.id, req.body, {new: true})
                console.log(updatedPeople)
                return res.status(200).json(updatedPeople)
            } catch(error) {
                console.error(error)
                return next(error)
            }
        
	// console.log(req.body)
	// res.status(200).json({message: "people update route: " + req.params.id })
});


module.exports = router
