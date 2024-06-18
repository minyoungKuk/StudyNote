# tanstack query

## 서버 상태 관리를 위한 라이브러리

- 캐싱, 동기화, 무효화등의 기능 제공

## 주요기능

1. 데이터 캐싱: 동일한 데어티 여러번 요청 안함
2. 자동 리패칭: 데이터 변경시 자동으로 리패칭하여 최신 상태 유지
3. 쿼리 무효화: 특정 이벤트 발생시 쿼리 무효화하고 데이터를 다시 가져옴.

### 사용방법 - useQuery

> setting
> `npm create vite tanstack-query-app --template react`