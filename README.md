#### 실행방법

**[ 인자값 넘겨서 실행하기 ]** npm start melon genie vibe  
**[ 기본 지정된 배열로 실행 ]** npm start
**[ 테스트 코드 실행 ]** npm test

---

#### 디렉토리 설명

-   info : 크롤링할 PATH를 저장하는 json 파일
-   file : 음원 순위를 저장하는 json 파일
-   logs : 프로세스 가동중 로그 기록 파일
-   main : 메인 디렉토리
-   main/utils : 메인함수 실행시 필요한 utils 목록
-   main/vo : 음원을 담을 객체
-   service : info에 저정된 path 기준으로 웹 크롤링을 하는 함수
-   mocha : 테스트 코드
