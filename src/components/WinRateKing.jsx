import React from 'react';
import styled from 'styled-components';

function WinRateKing({ Infos }) {
  const WinRateMembers = {};
  if (Infos) {
    for (let i = 0; i < Infos.length; i++) {
      const { blueMembers, redMembers, winTeam } = Infos[i];
      if (winTeam === '블루') {
        for (let key in blueMembers) {
          let item = blueMembers[key].Member;
          if (WinRateMembers[item]) {
            WinRateMembers[item] += 1;
          } else {
            WinRateMembers[item] = 1;
          }
        }
      } else if (winTeam === '레드') {
        for (let key in redMembers) {
          let item = redMembers[key].Member;
          if (WinRateMembers[item]) {
            WinRateMembers[item] += 1;
          } else {
            WinRateMembers[item] = 1;
          }
        }
      }
    }
  }

  let WinRateMember = {};
  for (let key in WinRateMembers) {
    let persent = Math.floor((WinRateMembers[key] / Infos.length) * 100);
    if (!WinRateMember[key]) {
      WinRateMember[key] = persent;
    }
  }
  const data = Object.entries(WinRateMember).sort((a, b) => b[1] - a[1]);
  // console.log(data);
  return (
    <WinRateContainer>
      <li>{data.length !== 0 ? `1등 ${data[0][0]} [${data[0][1]}]%` : ''}</li>
      <li>{data.length !== 0 ? `2등 ${data[1][0]} [${data[1][1]}]%` : ''}</li>
      <li>{data.length !== 0 ? `3등 ${data[2][0]} [${data[2][1]}]%` : ''}</li>
    </WinRateContainer>
  );
}

export default WinRateKing;

const WinRateContainer = styled.ul`
  max-width: 900px;
  width: 100%;
  height: 150px;

  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background-color: #32aaff;

  margin-top: 0;
  padding: 0;

  border: 2px solid #e6e6e6;
  border-radius: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    width: 200px;

    list-style: none;
    margin: 5px 0;
  }
`;
