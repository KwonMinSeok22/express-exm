/**
 * 오답
 * @example router는 파일이 다르기 때문에 require("express")
 * @author .Router()가 [필수]로 붙음 없으면 모듈로 처리 불가능
 */
const router = require("express").Router() 

/**
 * 오답
 * @example router 설정시 get, post, put, delete 이거 검색 추천
 * @author  router.get: 데이터 가져오기
 * @author  router.post: 데이터 보내기
 * @author  router.put: 데이터 업데이트 하기
 * @author  router.delete: 데이터 삭제
 * 
 * @author  try and catch는 무조건 붙여야함 따로 하나씩 적용시 오류 발생 두가지 한 묶음
 * @author  res.status는 [html code] 서버 상태 표시
 * @author  res.send와 res.json는 아까 봤던 json이다. 대신 send 그냥 보내는 것 이므로 res.json을 사용을 권장함.
 * @author  error는 말 그대로 get, post, put, delete를 실행하기 못하면 보내는 메시지이다.
*/
router.get('/users', async(req, res) => {
    try {
        res.render("home")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;