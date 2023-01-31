const express = require('express')
const router = express.Router()

// import model (Monster)
const { Monster } = require('../models')

const db = require('../models') // db.Monster 
// const Monster = require('../models/Monster')

console.log(Monster)

// Routes
// http://localhost:4000/monster/
router.get('/', async (req,res)=> {
    // res.status(200).json({message: "Monster index/get route"})
    try {
        const allMonster = await Monster.find({})
        res.status(200).json(allMonster)
    } catch (err){
        res.status(400).json({error: err})
    }
})

// http://localhost:4000/monster/
router.post('/', async (req,res)=> {
    // console.log('post route', req.body)
    // res.status(201).json({message: "Monster create/post route"})

    try {
        // 
        const newMonster = await Monster.create(req.body)
        res.status(201).json(newMonster)

    } catch (err) {
        res.status(400).json({ error: err })
    }
})

// http://localhost:4000/monster/:id - GET
router.get('/:id', async (req,res)=> {
    // res.status(200).json({message: "Monster show/get route /Monster/"+req.params.id})
    try {

        const foundMonster = await Monster.findById(req.params.id)
        res.status(200).json(foundMonster)

    }catch (err) {
        res.status(400).json({error: err})
    }
})
// http://localhost:4000/monster/:monsterName - GET
router.post('/name/:monsterName', async (req,res)=> {
    // res.status(200).json({message: "Monster index/get route"})
    try {
        const namedMonster = await Monster.find({
            // regex keyword makes this work, by returning the closest results
            name: { "$regex": req.params.monsterName, "$options": "i" }
        }).exec()
        console.log((namedMonster))
        res.status(200).json(namedMonster)
    } catch (err){
        res.status(400).json({error: err})
    }
})
// http://localhost:4000/monster/:id - DELETE
router.delete('/:id', async (req,res)=> {
    // res.status(200).json({message: "Monster destroy/delete route /Monster/"+req.params.id})
    try {
        const deletedMonster = await Monster.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedMonster)

    }catch (err) {
        // console.log(err)
        res.status(400).json({error: err})
    }
})

// http://localhost:4000/monster/:id - PUT
router.put('/:id', async (req,res)=> {
    // res.status(200).json({message: "Monster update/put route /Monster/"+req.params.id})
    try {

        const updatedMonster = await Monster.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updatedMonster)

    }catch (err) {
        res.status(400).json({error: err})
    }
})

module.exports = router 