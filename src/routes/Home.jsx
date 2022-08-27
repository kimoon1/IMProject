import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../app/firebase';
import MemberLookup from '../components/MemberLookup';

function Home() {
  const [Infos, setInfos] = useState();

  const querySnap = async () => {
    const data = await getDocs(collection(db, 'gameInfos'));
    let temp = [];
    data.forEach((doc) => {
      // console.log(doc.data());
      temp.push(doc.data());
    });
    setInfos([...temp]);
    return temp;
  };

  useEffect(() => {
    querySnap();
    console.log(Infos);
  }, []);
  const InfosHandler = (data) => {
    setInfos([...Infos, data]);
  };

  console.log(Infos);
  return (
    <>
      <h2>8월 내전 통계</h2>
      <HomeContainer>
        <React.Suspense fallback='...Loading'>
          <MemberLookup />
        </React.Suspense>
        ;
        <div>
          <div>8월 mvp 1등</div>
          <div>8월 연패 1등</div>
          <div>내전 승률 왕</div>
          <div>각 분야 1등</div>
          <div>내전 벤픽 현황</div>
        </div>
        <Link to='/setmember'>이동하기</Link>
      </HomeContainer>
    </>
  );
}

export default Home;

const HomeContainer = styled.main`
  width: 1200px;

  display: flex;
`;
