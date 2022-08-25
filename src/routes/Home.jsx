import React, { useState } from 'react';
import styled from 'styled-components';

function Home() {
  const [redMembers, setRedMembers] = useState({
    Top: {
      Member: '',
      redChampionName: '',
    },
    Jg: {
      Member: '',
      redChampionName: '',
    },
    Mid: {
      Member: '',
      redChampionName: '',
    },
    Ad: {
      Member: '',
      redChampionName: '',
    },
    Sup: {
      Member: '',
      redChampionName: '',
    },
  });
  const [blueMembers, setBlueMembers] = useState({
    Top: {
      Member: '',
      blueChampionName: '',
    },
    Jg: {
      Member: '',
      blueChampionName: '',
    },
    Mid: {
      Member: '',
      blueChampionName: '',
    },
    Ad: {
      Member: '',
      blueChampionName: '',
    },
    Sup: {
      Member: '',
      blueChampionName: '',
    },
  });

  const MembersDataInput = (e) => {
    // console.dir(e.target);
    const titleName =
      e.target.parentElement.parentElement.children[0].innerHTML;

    if (titleName === '레드 진영') {
      const tmpdata = { ...redMembers };
      const LineData = e.target.dataset.line;
      const tmpline = { ...tmpdata[`${LineData}`] };
      if (e.target.name === 'rednickname') {
        tmpline.Member = e.target.value;
      } else if (e.target.name === 'redChampionName') {
        tmpline.redChampionName = e.target.value;
      }
      tmpdata[`${LineData}`] = { ...tmpline };
      setRedMembers({ ...tmpdata });
    } else if (titleName === '블루 진영') {
      const tmpdata = { ...blueMembers };
      const LineData = e.target.dataset.line;
      const tmpline = { ...tmpdata[`${LineData}`] };
      if (e.target.name === 'bluenickname') {
        tmpline.Member = e.target.value;
      } else if (e.target.name === 'blueChampionName') {
        tmpline.blueChampionName = e.target.value;
      }
      tmpdata[`${LineData}`] = { ...tmpline };
      setBlueMembers({ ...tmpdata });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  // console.log(redMembers);
  return (
    <>
      <TitleH2>내전 전적 입력</TitleH2>
      <StyleInfoForm onSubmit={onSubmit}>
        <div className='container'>
          <GamerBox onChange={MembersDataInput}>
            <h4>레드 진영</h4>
            <SubTitleBox>
              <StyledSpan name='nickname'>닉네임</StyledSpan>
              <StyledSpan name='champion'>챔피언</StyledSpan>
            </SubTitleBox>
            <StyledLineBox>
              <StyledSpan>탑</StyledSpan>
              <StyledInput type='text' data-line='Top' name='rednickname' />
              <StyledInput type='text' data-line='Top' name='redChampionName' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>정글</StyledSpan>
              <StyledInput type='text' data-line='Jg' name='rednickname' />
              <StyledInput type='text' data-line='Jg' name='redChampionName' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>미드</StyledSpan>
              <StyledInput type='text' data-line='Mid' name='rednickname' />
              <StyledInput type='text' data-line='Mid' name='redChampionName' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>원딜</StyledSpan>
              <StyledInput type='text' data-line='Ad' name='rednickname' />
              <StyledInput type='text' data-line='Ad' name='redChampionName' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>서폿</StyledSpan>
              <StyledInput type='text' data-line='Sup' name='rednickname' />
              <StyledInput type='text' data-line='Sup' name='redChampionName' />
            </StyledLineBox>
          </GamerBox>
          <GamerBox onChange={MembersDataInput}>
            <h4>블루 진영</h4>
            <SubTitleBox>
              <StyledSpan name='nickname'>닉네임</StyledSpan>
              <StyledSpan name='champion'>챔피언</StyledSpan>
            </SubTitleBox>
            <StyledLineBox>
              <StyledSpan>탑</StyledSpan>
              <StyledInput type='text' data-line='Top' name='bluenickname' />
              <StyledInput
                type='text'
                data-line='Top'
                name='blueChampionName'
              />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>정글</StyledSpan>
              <StyledInput type='text' data-line='Jg' name='bluenickname' />
              <StyledInput type='text' data-line='Jg' name='blueChampionName' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>미드</StyledSpan>
              <StyledInput type='text' data-line='Mid' name='bluenickname' />
              <StyledInput
                type='text'
                data-line='Mid'
                name='blueChampionName'
              />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>원딜</StyledSpan>
              <StyledInput type='text' data-line='Ad' name='bluenickname' />
              <StyledInput type='text' data-line='Ad' name='blueChampionName' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>서폿</StyledSpan>
              <StyledInput type='text' data-line='Sup' name='bluenickname' />
              <StyledInput
                type='text'
                data-line='Sup'
                name='blueChampionName'
              />
            </StyledLineBox>
          </GamerBox>
        </div>
        <BanBox>
          <StyledSpan name='banChampion'>밴 챔피언</StyledSpan>
        </BanBox>
        <SubContainer>
          <SubBox>
            <StyledSpan name='endTime'>게임 종료 시간</StyledSpan>
            <StyledInput type='text' />
          </SubBox>
          <SubBox>
            <StyledSpan>MVP</StyledSpan>
            <StyledInput type='text' />
          </SubBox>
        </SubContainer>
        <StyledBtn type='submit' className='submit' value='작성하기' />
      </StyleInfoForm>
    </>
  );
}

export default Home;

const TitleH2 = styled.h2`
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
`;
const StyleInfoForm = styled.form`
  width: 900px;

  border: 2px solid #e6e6e6;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 100px;
  .container {
    width: 830px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;

    margin: 0 auto;
  }
  div {
    border-radius: 15px;
  }
  input {
    padding: 0;
    padding-left: 10px;

    &:focus {
      border: 2px solid #796dfb;
    }
  }
  .submit {
    border-radius: 15px;
  }
`;

const GamerBox = styled.div`
  width: 400px;

  display: inline-flex;
  flex-direction: column;

  border: 1px solid #e6e6e6;
  margin-top: 20px;

  h4 {
    margin: 10px auto;
  }
`;
const SubTitleBox = styled.div`
  width: 400px;
  display: flex;

  justify-content: center;
`;

const StyledSpan = styled.span`
  width: ${(props) =>
    (props.name === 'endTime') | (props.name === 'banChampion')
      ? '150'
      : '50'}px;

  margin-right: ${(props) => (props.name === 'nickname' ? '120' : '0')}px;
  font-weight: bold;
  display: inline-block;
`;

const StyledLineBox = styled.div`
  margin: 5px auto;
`;
const StyledInput = styled.input`
  width: ${(props) =>
    (props.name === 'rednickname') | (props.name === 'bluenickname')
      ? '100'
      : '200'}px;
  height: 20px;

  border: 1px solid #717171;
  border-radius: 10px;
  outline: none;

  margin-right: ${(props) =>
    (props.name === 'rednickname') | (props.name === 'bluenickname')
      ? '20'
      : 0}px;

  box-sizing: border-box;
`;

const BanBox = styled.div`
  width: 830px;
  height: 70px;

  border: 1px solid #e6e6e6;
  box-sizing: border-box;

  margin: 10px auto;

  display: flex;
`;

const StyledBtn = styled.input`
  width: 200px;
  height: 70px;

  border: 2px solid #e6e6e6;
  background-color: #fff;

  margin: 10px auto;

  &:hover {
    background-color: #464646;
    color: #fff;
  }
`;
const SubContainer = styled.div`
  width: 830px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
`;
const SubBox = styled.div`
  width: 400px;
  height: 40px;

  border: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
