import React from 'react';
import styled from 'styled-components';

function MvpMember({ Infos }) {
  let mvpMembers = {};
  if (Infos) {
    for (let i = 0; i < Infos.length; i++) {
      const { mvpMember } = Infos[i];

      if (mvpMembers[mvpMember]) {
        mvpMembers[mvpMember] += 1;
      } else {
        mvpMembers[mvpMember] = 1;
      }
    }
  }

  let maxMvp = ['', 0];
  for (let key in mvpMembers) {
    // console.log(key, mvpMembers[key]);
    if (maxMvp[1] < mvpMembers[key]) {
      maxMvp = [key, mvpMembers[key]];
    }
  }
  // console.log(maxMvp);
  return (
    <MvpContainer>
      <MvpMemberBox>
        MVP : {maxMvp[0]} [{maxMvp[1]}]회
      </MvpMemberBox>
    </MvpContainer>
  );
}

export default MvpMember;

const MvpContainer = styled.div`
  max-width: 900px;
  width: 100%;
  height: 100px;

  color: #fff;

  background-color: #32aaff;

  border: 2px solid #e6e6e6;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MvpMemberBox = styled.span`
  width: 100%;

  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  line-height: 53px;
  text-align: center;

  display: block;
  box-sizing: border-box;
`;
