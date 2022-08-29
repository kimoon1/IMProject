import React from 'react';
import styled from 'styled-components';

function MaxlosingTeamMember({ Infos }) {
  let losingmembers = {};

  if (Infos) {
    for (let i = 0; i < Infos.length; i++) {
      const { blueMembers, redMembers, winTeam } = Infos[i];
      if (winTeam === '블루') {
        for (let key in redMembers) {
          let item = redMembers[key].Member;
          if (losingmembers[item]) {
            losingmembers[item] += 1;
          } else {
            losingmembers[item] = 1;
          }
        }
      } else if (winTeam === '레드') {
        for (let key in blueMembers) {
          let item = blueMembers[key].Member;
          if (losingmembers[item]) {
            losingmembers[item] += 1;
          } else {
            losingmembers[item] = 1;
          }
        }
      }
    }
  }

  let losingUser = ['', 0];
  for (let key in losingmembers) {
    // console.log(key, mvpMembers[key]);
    if (losingUser[1] < losingmembers[key]) {
      losingUser = [key, losingmembers[key]];
    }
  }
  // console.log(losingUser);
  return (
    <LosingContainer>
      <LosingMemberBox>
        최다 패배: {losingUser[0]} [{losingUser[1]}]회
      </LosingMemberBox>
    </LosingContainer>
  );
}

export default MaxlosingTeamMember;

const LosingContainer = styled.div`
  max-width: 900px;
  width: 100%;
  height: 100px;

  color: #fff;

  margin: 20px 0;

  background-color: #32aaff;

  border: 2px solid #e6e6e6;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LosingMemberBox = styled.span`
  width: 100%;

  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  line-height: 53px;
  text-align: center;

  display: block;
  box-sizing: border-box;
`;
