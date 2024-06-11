import _ from "lodash";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Empty = () => {
  let timerId = null;

  const throttle = _.throttle(() => {
    console.log("2초동안 추가요청 안받음");
  }, 2000);

  const debounce = _.debounce(() => {
    console.log("마지막 요청으로부터 2초뒤 실행");
  }, 2000);

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  });

  return (
    <div>
      <Link to="/">
        <button> 메인페이지로 </button>
      </Link>

      <div>
        <h2>button 이벤트 예제</h2>
        <button onClick={throttle}>쓰로틀링 버튼</button>
        <button onClick={debounce}>디바운싱 버튼</button>
      </div>
    </div>
  );
};

export default Empty;
