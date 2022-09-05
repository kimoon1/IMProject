import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from '../app/firebase';
import MemberLookup from '../components/MemberLookup';
import { useDispatch } from 'react-redux';
import { setMembers } from '../features/members';
import MvpMember from '../components/MvpMember';
import MaxlosingTeamMember from '../components/MaxlosingTeamMember';
import WinRateKing from '../components/WinRateKing';
import FieldUsers from '../components/FieldUsers';

function Home() {
  const [Infos, setInfos] = useState();
  const dispatch = useDispatch();

  const querySnap = async () => {
    const data = query(collection(db, 'gameInfos'));
    onSnapshot(data, (snapshot) => {
      const temp = snapshot.docs.map((doc) => ({ ...doc.data() }));
      setInfos([...temp]);
    });
  };

  useEffect(() => {
    querySnap();
    console.log(Infos);
  }, []);
  const InfosHandler = (data) => {
    setInfos([...Infos, data]);
  };

  // dispatch(setMembers([Infos]));
  return (
    <Container>
      <h2>8월 내전 통계</h2>
      <StyledLink to='/setmember'>작성하기</StyledLink>
      <MemberLookup Infos={Infos} />
      <MainContainer>
        <MvpMember Infos={Infos} />
        <MaxlosingTeamMember Infos={Infos} />
        <WinRateKing Infos={Infos} />
        <FieldUsers Infos={Infos} />
        <div>내전 벤픽 현황</div>
      </MainContainer>
    </Container>
  );
}

export default Home;

const MainContainer = styled.main`
  width: 900px;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Container = styled.div`
  width: 1100px;

  display: flex;
  flex-wrap: wrap;

  margin: 0 auto;
  h2 {
    width: 100%;

    margin: 40px 0;

    text-align: center;
  }
`;
const StyledLink = styled(Link)`
  width: 100%;

  margin-bottom: 20px;
  text-align: center;
`;
