const express = require('express')
const app = express()
const slideDB = require('./config')

// get sll slides data from db
app.get('/slides', async (req, res) =>{
    let result = await slideDB.get()
    const list = [];
    result.forEach((doc) => {
      const data = doc.data()
      data.id = doc.id
      list.push(data)
    })
    res.send(list)

})

// get single slide data 
app.get('/slide/:id', async (req, res) => {
    let slide_id = req.params.id
    
    try {
        const result = await slideDB.doc(slide_id).get();
        if (result.length <= 0){ res.status(404).send('Blog post not found')}
        else{
            let data = result.data()
            res.send(data);
        }
    } catch (e) {
        res.send(e);
    }
    
})

// add slide to db 
app.post('/slides', async (req, res) => {
    const data = req.body
     await slideDB.add(data)
    res.status(201).send('created')
})

// update slide
app.put('/slide/:id', async (req, res) =>{
    let slide_id = req.params.id 
    const data = req.body
    try {

        await slideDB.doc(slide_id).update(data)
        res.status(204).send('updated')
    }
    catch (e) {
        res.send(e);
    }
    
})

// delete slide
app.delete('/slide/:id', async (req, res) =>{
    let slide_id = req.params.id 
    try {
        await slideDB.doc(slide_id).delete()        
    }
    catch (e) {
        console.log('ERROR')
        res.status(404).send(e);
    }
    res.status(204).send('deleted')
})


module.exports = app