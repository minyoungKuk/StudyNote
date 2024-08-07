# 기술면접 - Frontend

## 1. Optimistic Update

낙관적 업데이트는 사용자 경험 개선을 위하여 서버 응답을 기다리지 않고, 요청을 보낸 후 긍정적인 결과를 예상하여 화면에 미리 반영하는 방법.

이를 통해 사용자에게 빠른 응답을 제공할 수 있지만, 서버와 클라이언트 간 데이터 불일치 문제가 발생할 수 있음.

이를 해결하기 위해 최종적으로 서버 응답을 받아 상태를 확인하고 조정하는 과정이 필요.

## 2. 인증/인가의 관점에서 `세션 방식`과 `JWT 방식`의 차이점을 설명, 각 방식의 장단점, 실제 프로젝트 경험

### 세션 방식

#### 원리

1. 유저가 로그인하면 서버는 유저 정보를 세션에 저장
2. 서버는 세션 ID를 발급하고 이를 클라이언트의 쿠키에 저장
3. 이후 클라이언트는 요청 시마다 쿠키에 저장된 세션 ID를 서버에 전송
4. 서버는 세션 ID를 이용해 저장된 유저 정보를 확인하고 인증을 허가

#### 장단점

##### 장점

- 민감한 정보를 서버에만 저장하므로 보안에 유리
- 세션 만료난 로그아웃 처리가 비교적 쉬움

##### 단점

- 서버가 상태를 유지해야 하므로 서버 부하가 큼
- 여러 서버 간 세션 데이터를 공유해야 하므로 확장성이 떨어짐

<br/>

### JWT(Json Web Token) 방식

#### 원리

1. 유저가 로그인하면 서버는 유저 정보와 만료 시간등을 포함한 토큰을 생성(이 토큰에는 민감한 정보 포함X)
2. 생성한 토큰을 클라이언트에 전달
3. 클라이언트는 이 토큰을 로컬 스토리지나 쿠키에 저장
4. 이후 요청 시마다 클라이언트는 저장된 토큰을 서버에 전송
5. 서버는 토큰을 검증하고 만료되지 않았으면 인증을 허가

#### 장단점

##### 장점

- 서버가 상태를 유지하지 않아 확장성이 뛰어남
- 클라이언트가 인증 상태를 유지하므로 서버 부하가 적습니다

##### 단점

- 서명키 관리 중요
- 로그아웃 처리나 토큰 만료 전 강제 만료가 어려움
- 토큰에 민감한 정보를 포함하면 보안 위험이 있음

### `세션 방식`과 `JWT 방식`의 차이점

1. 서버 부하

- 세션: 서버에서 세션 정보를 저장하기에 부하가 증가 할 수 있음
- JWT: 서버에 상태를 저장하지 않으므로 부하가 적음

2. 확장성

- 세션: 확장성이 떨어지며, 여러 서버 간 세션 데이터를 공유 해야 할 때 복잡성 증가
- JWT: 수평 확장 용이, 중앙화 된 저장소 없이 인증 가능

3. 보안

- 세션: 민감한 정보가 서버에만 저장되므로 클라이언트 측 노출 위험이 적음
- JWT: 서명키 관리가 중요하며, 완료 전 로그아웃 관리가 어려움

## 3. 쿠키, 세션, 웹 스토리지의 차이점을 설명

### 쿠키

#### 특징

- 클라이언트와 서버 간의 데이터 저장
- HTTP 요청 시마다 서버로 자동 전송
- 유효 기간 설정 가능
- `httpOnly`옵션을 통해 클라이언트 측 스크립트에서 접근할 수 없게 하여 보안을 강화

#### 사용 예시

- 로그인 상태 유지
- 최근 본 상품이나 관심 있는 주제 저장
- 맞춤 광고 제공

**서버와 클라이언트 간 데이터 저장, HTTP 요청 시마다 자동 전송, 로그인 상태 유지 및 맞춤 광고 등에 사용**

### 세션

#### 특징

- 서버에서 사용자 정보를 유지
- 사용자가 웹 사이트에 접속하는 동안 유지
- 브라우저 닫으면 세션 종료

#### 사용예시

- 로그인 상태 관리
- 쇼핑몰 장바구니

**서버에서 사용자 정보를 유지, 브라우저를 닫으면 종료, 로그인 상태 관리 및 쇼핑몰 장바구니 등에 사용**

### 웹 스토리지(로컬 스토리지, 세션 스토리지)

#### 로컬 스토리지

##### 특징

- 클아이언트 측에 데이터를 저장
- 브라우저를 닫아도 데이터 유지
- 비교적 큰 용량의 데이터를 저장할 수 있음
- 서버로 자동 전송되지 않음

##### 사용 예시

- 다크 모드 설정
- 사용자 환경 설정 저장

**클라이언트 측에 데이터를 영구적으로 저장, 사용자 환경 설정 등에 사용**

#### 세션 스토리지

##### 특징

- 클라이언트 측에 데이ㅓ를 저장
- 세션 동안만 데이터 유지
- 브라우저나 탭을 닫으면 데어터 사라짐
- 서버로 자동 전송되지 않음

##### 사용 예시

- 일시적인 데이터 저장
- 페이지 간 데이터 전달

**세션 동안 데이터 유지, 브라우저나 탭을 닫으면 데이터 사라짐, 일시적인 데이터 저장 등에 사용**

## 4. 브라우저 렌더링 과정

1. HTML 파싱: HTML을 읽어 DOM 트리 생성
2. CSS 파싱: CSS를 읽어 CSSOM 트리 생성
3. DOM & CSSOM 결합: 두 트리를 결합 후 렌더 트리 생성
4. 레이아웃 계산: 각 요소의 크기와 위치 계산
5. 페인팅: 계산된 레이아웃을 화면에 그림

## 5. 쿼리 스트링(Query String)

URL의 일부분으로 특정페이지에 추가적인 데이터를 전달하기 위해 사용.

### 사용 예시

1. 검색 기능: 사용자가 검색어를 입력하면, 검색 결곽 페이지로 이동하면서 검색어를 전달(예시 URL: https://example.com/search?q=apple)

2. 필터링 및 정렬: 전자상거래 사이트에서 상품 목록을 가격, 카테고리, 평점 등으로 필터링하거나 정렬할 때 사용(예시 URL: https://example.com/products?category=electronics&sort=price_asc)

3. 페이지네이션: 긴 목록을 여러 페이지로 나눌 때, 현재 페이지 번호 전달(예시 URL: https://example.com/articles?page=2)

4. API 요청: 클라이언트가 서버에 데이터를 요청할 때 특정 파라미터를 전달(예시 URL: https://api.example.com/users?id=1234) 등등..

## 6. 브라우저에 URL을 입력하면 일어나는 일의 순서

1. URL 분석: 브라우저가 입력된 URL을 분석하여 프로토콜(http, https), 도메인 이름(예: naver.com), 경로(예: index.html)등을 파악
2. DNS 조회: 도메인 이름을 IP주소로 변환하기 위해 DNS서버에 요청 보냄
3. IP 주소 반환: DNS 서버가 도메인에 해당하는 IP 주소를 브라우저에 응답으로 보냄
4. TCP 연결: 브라우저가 IP주소를 사용하여 해당 서버와 TCP연결 설정. 이 과정에서 3-way handshake(SYN ➡️ SYN-ACK ➡️ ACK)가 이루어짐
5. HTTP 요청: 브라우저가 서버에 HTTP요청을 보내고 이 요청에는 사용자가 요청한 리소스의 경로와 기타 정보가 포함(예: `GET /index.html HTTP/1.1`요청을 보냄)
6. 서버 응답: 서버가 요청된 리소스를 찾아 HTTP 응답으로 브라우저에 보냄. 응답에는 HTML, CSS, JavaScript 파일 등이 포함되어 있음(예: 서버가 `200 OK`와 함께 HTML문서 보냄)
7. 브라우저 랜더링: 브라우저가 받아온 리소스를 랜더링하여 화면에 표시
