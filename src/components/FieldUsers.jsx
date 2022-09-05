import React from 'react';
import styled from 'styled-components';

function FieldUsers({ Infos }) {
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
  return (
    <FieldUsersContainer>
      <div>kda</div>
      <div>킬</div>
      <div>데스</div>
      <div>어시</div>
    </FieldUsersContainer>
  );
}

export default FieldUsers;

const FieldUsersContainer = styled.div`
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
