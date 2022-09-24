import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function MemberLookup({ Infos }) {
  let members = {};
  if (Infos) {
    for (let i = 0; i < Infos.length; i++) {
      const { blueMembers, redMembers } = Infos[i];

      for (let key in blueMembers) {
        let item = blueMembers[key].Member;
        if (members[item]) {
          members[item] += 1;
        } else {
          members[item] = 1;
        }
      }
      for (let key in redMembers) {
        let item = blueMembers[key].Member;
        if (members[item]) {
          members[item] += 1;
        } else {
          members[item] = 1;
        }
      }
    }
  }
  // console.log(members);
  useEffect(() => {}, []);
  return (
    <AsideContainer>
      <h3>내전 참여 현황</h3>
      <ul>
        {members
          ? Object.entries(members).map((value, key) => (
              <li key={key}>
                {value[0]} : {value[1]} 회
              </li>
            ))
          : null}
      </ul>
    </AsideContainer>
  );
}

export default MemberLookup;

const AsideContainer = styled.aside`
  width: 200px;
  height: 2000px;
  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 0;
  }

  li {
    width: 130px;
    list-style: none;
    margin: 10px 0;
    border: 1px solid #e6e6e6;
    text-align: center;
    font-weight: bold;
  }
`;
