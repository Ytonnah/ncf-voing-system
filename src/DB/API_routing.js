//use rfce to make template
// learn how to use array mapping
const express = require('express')
const app = express()
const port = 3000


//API stuff
app.get('/express', (req, res) => {
  res.send('Hello World!')
})

//positions
app.get('get_positions',(req,res)=>{
    req.send('req')
})

app.post('create_positions',(req,res)=>{
    req.send('req')
})
app.post('update_positions',(req,res)=>{
    req.send('req')
})
app.delete('delete_positions',(req,res)=>{
    req.send('req')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})