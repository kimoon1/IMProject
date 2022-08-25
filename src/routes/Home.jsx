import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>8월 내전 통계</h2>
      <aside>내전참여 인원</aside>
      <div>
        <div>8월 mvp 1등</div>
        <div>8월 연패 1등</div>
        <div>내전 승률 왕</div>
        <div>각 분야 1등</div>
        <div>내전 벤픽 현황</div>
      </div>
      <Link to='/setmember'>이동하기</Link>
    </div>
  );
}

export default Home;
