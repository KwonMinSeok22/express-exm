const express = require('express')
const path = require('path') 
// path 안적음 '오답'
const app = express()
const port = 80 

// app.METHOD(express,path,ejs) 오답

/**
 * 오답
 * @example views => 파일에 따라 위치가 다름 ('../frontend/views')
 * @example _dirname => __dirname
 */
app.set('views',path.join(__dirname,'../frontend/views')); 
/**
 * 정답
 * @author views engine 같은 경우 검색 해보면 알겠지만 ejs말고 pug 등 다양한 템플릿이 있음
 */
app.set("views engine", "ejs")

// app.set('views', './views'); 오답

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * 오답
 * @example Required: {} <= 이게 모듈 변수 불러오는 거고 여기 안에다가 불러오기.
 * @example Required: 라우터 설정, 연결시 필요!
 */
const { users } = require("./route/index")
app.use("/api", users)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})