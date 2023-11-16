const express=require('express')
const app=express()
var cors = require('cors')
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
const authrouter=require('./router/auth.router')
const subjectrouter=require('./router/subject.router')
const questionrouter=require('./router/question.router')
const answerrouter=require('./router/answer.router')
const pointrouter=require('./router/point.router')
const examrouter=require('./router/exam.router')
const publicrouter=require('./router/public.router')
const classrouter=require('./router/class.router')
const listQrouter=require('./router/listquestion.router')
const listclassrouter=require('./router/listclass.router')
const testrouter=require('./router/test.router')
const nhchrouter=require('./router/nhch.router')
const listNHrouter=require('./router/listNH.router')
const answerSTrouter=require('./router/answerStudent.router')
const  err = require('./middleware/error.middleware')
app.use('/api/auth/',authrouter)
app.use('/api/Subject/',subjectrouter)
app.use('/api/Question/',questionrouter)
app.use('/api/Answer/',answerrouter)
app.use('/api/Point/',pointrouter)
app.use('/api/Exam/',examrouter)
app.use('/api/Class/',classrouter)
app.use('/api/ListQ/',listQrouter)
app.use('/api/ListClass/',listclassrouter)
app.use('/api/test/',testrouter)
app.use('/api/AnswerST/',answerSTrouter)
app.use('/api/NHCH/',nhchrouter)
app.use('/api/ListNH/',listNHrouter)
app.use('/public/',publicrouter)
app.use('/getimg',express.static('././src/public/Image/'))
app.use('/userimg/',express.static('././src/public/Imageuser/'))

app.use(err.error)
module.exports=app