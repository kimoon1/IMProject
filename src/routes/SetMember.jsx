import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createData } from '../components/createData';

function SetMember() {
  const [redMembers, setRedMembers] = useState({
    Top: {
      Member: '',
      redChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
    Jg: {
      Member: '',
      redChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
    Mid: {
      Member: '',
      redChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
    Ad: {
      Member: '',
      redChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
    Sup: {
      Member: '',
      redChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
  });
  const [blueMembers, setBlueMembers] = useState({
    Top: {
      Member: '',
      blueChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
    Jg: {
      Member: '',
      blueChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
    Mid: {
      Member: '',
      blueChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
    Ad: {
      Member: '',
      blueChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
    Sup: {
      Member: '',
      blueChampionName: '',
      kill: 0,
      death: 0,
      assi: 0,
    },
  });
  const [banDataArray, setBanDataArray] = useState({});
  const [gameSetTime, setGameSetTime] = useState({ month: '', day: '' });
  const [gameTime, setGameTime] = useState({ min: '', sec: '' });
  const [mvpMember, setmvpMember] = useState('');
  const [winTeam, setWinTeam] = useState('');
  let navigate = useNavigate();

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
      } else if (e.target.name === 'kill') {
        tmpline.kill = e.target.value;
      } else if (e.target.name === 'death') {
        tmpline.death = e.target.value;
      } else if (e.target.name === 'assi') {
        tmpline.assi = e.target.value;
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
      } else if (e.target.name === 'kill') {
        tmpline.kill = e.target.value;
      } else if (e.target.name === 'death') {
        tmpline.death = e.target.value;
      } else if (e.target.name === 'assi') {
        tmpline.assi = e.target.value;
      }
      tmpdata[`${LineData}`] = { ...tmpline };
      setBlueMembers({ ...tmpdata });
    }
  };

  const BanDataInput = (e) => {
    const banum = e.target.dataset.bannum;
    if (e.code === 'Tab') {
      setBanDataArray({
        ...banDataArray,
        [`${banum}`]: e.target.value,
      });
    }
  };

  const gameTimeData = (e) => {
    if (e.target.name === 'min') {
      setGameTime({ ...gameTime, min: e.target.value });
    } else if (e.target.name === 'sec') {
      setGameTime({ ...gameTime, sec: e.target.value });
    }
  };

  const mvpMemverData = (e) => {
    setmvpMember(e.target.value);
  };
  const winTeamData = (e) => {
    setWinTeam(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const createAt = new Date();
    const data = {
      redMembers,
      blueMembers,
      banDataArray,
      gameTime,
      mvpMember,
      createAt,
      winTeam,
      gameSetTime,
    };
    createData(data);
    console.log(data);
  };

  return (
    <>
      <TitleH2>내전 전적 입력</TitleH2>
      <GameInfoDataBox
        onChange={(e) => {
          if (e.target.name === 'month') {
            setGameSetTime({ ...gameSetTime, month: e.target.value });
          } else if (e.target.name === 'day') {
            setGameSetTime({ ...gameSetTime, day: e.target.value });
          }
        }}>
        <span>경기 날짜</span>
        <div>
          <input type='text' name='month' />월
          <input type='text' name='day' />일
        </div>
      </GameInfoDataBox>
      <StyleInfoForm onSubmit={onSubmit}>
        <div className='container'>
          <GamerBox onChange={MembersDataInput}>
            <h4>레드 진영</h4>
            <SubTitleBox>
              <StyledSpan name='nickname'>닉네임</StyledSpan>
              <StyledSpan name='champion'>챔피언</StyledSpan>
              <StyledSpan name='KDA'>K</StyledSpan>
              <StyledSpan name='KDA'>D</StyledSpan>
              <StyledSpan name='KDA'>A</StyledSpan>
            </SubTitleBox>
            <StyledLineBox>
              <StyledSpan>탑</StyledSpan>
              <StyledInput type='text' data-line='Top' name='rednickname' />
              <StyledInput type='text' data-line='Top' name='redChampionName' />
              <StyledInput type='text' data-line='Top' name='kill' />
              <StyledInput type='text' data-line='Top' name='death' />
              <StyledInput type='text' data-line='Top' name='assi' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>정글</StyledSpan>
              <StyledInput type='text' data-line='Jg' name='rednickname' />
              <StyledInput type='text' data-line='Jg' name='redChampionName' />
              <StyledInput type='text' data-line='Jg' name='kill' />
              <StyledInput type='text' data-line='Jg' name='death' />
              <StyledInput type='text' data-line='Jg' name='assi' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>미드</StyledSpan>
              <StyledInput type='text' data-line='Mid' name='rednickname' />
              <StyledInput type='text' data-line='Mid' name='redChampionName' />
              <StyledInput type='text' data-line='Mid' name='kill' />
              <StyledInput type='text' data-line='Mid' name='death' />
              <StyledInput type='text' data-line='Mid' name='assi' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>원딜</StyledSpan>
              <StyledInput type='text' data-line='Ad' name='rednickname' />
              <StyledInput type='text' data-line='Ad' name='redChampionName' />
              <StyledInput type='text' data-line='Ad' name='kill' />
              <StyledInput type='text' data-line='Ad' name='death' />
              <StyledInput type='text' data-line='Ad' name='assi' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>서폿</StyledSpan>
              <StyledInput type='text' data-line='Sup' name='rednickname' />
              <StyledInput type='text' data-line='Sup' name='redChampionName' />
              <StyledInput type='text' data-line='Sup' name='kill' />
              <StyledInput type='text' data-line='Sup' name='death' />
              <StyledInput type='text' data-line='Sup' name='assi' />
            </StyledLineBox>
          </GamerBox>
          <GamerBox onChange={MembersDataInput}>
            <h4>블루 진영</h4>
            <SubTitleBox>
              <StyledSpan name='nickname'>닉네임</StyledSpan>
              <StyledSpan name='champion'>챔피언</StyledSpan>
              <StyledSpan name='KDA'>K</StyledSpan>
              <StyledSpan name='KDA'>D</StyledSpan>
              <StyledSpan name='KDA'>A</StyledSpan>
            </SubTitleBox>
            <StyledLineBox>
              <StyledSpan>탑</StyledSpan>
              <StyledInput type='text' data-line='Top' name='bluenickname' />
              <StyledInput
                type='text'
                data-line='Top'
                name='blueChampionName'
              />
              <StyledInput type='text' data-line='Top' name='kill' />
              <StyledInput type='text' data-line='Top' name='death' />
              <StyledInput type='text' data-line='Top' name='assi' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>정글</StyledSpan>
              <StyledInput type='text' data-line='Jg' name='bluenickname' />
              <StyledInput type='text' data-line='Jg' name='blueChampionName' />
              <StyledInput type='text' data-line='Jg' name='kill' />
              <StyledInput type='text' data-line='Jg' name='death' />
              <StyledInput type='text' data-line='Jg' name='assi' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>미드</StyledSpan>
              <StyledInput type='text' data-line='Mid' name='bluenickname' />
              <StyledInput
                type='text'
                data-line='Mid'
                name='blueChampionName'
              />
              <StyledInput type='text' data-line='Mid' name='kill' />
              <StyledInput type='text' data-line='Mid' name='death' />
              <StyledInput type='text' data-line='Mid' name='assi' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>원딜</StyledSpan>
              <StyledInput type='text' data-line='Ad' name='bluenickname' />
              <StyledInput type='text' data-line='Ad' name='blueChampionName' />
              <StyledInput type='text' data-line='Ad' name='kill' />
              <StyledInput type='text' data-line='Ad' name='death' />
              <StyledInput type='text' data-line='Ad' name='assi' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>서폿</StyledSpan>
              <StyledInput type='text' data-line='Sup' name='bluenickname' />
              <StyledInput
                type='text'
                data-line='Sup'
                name='blueChampionName'
              />
              <StyledInput type='text' data-line='Sup' name='kill' />
              <StyledInput type='text' data-line='Sup' name='death' />
              <StyledInput type='text' data-line='Sup' name='assi' />
            </StyledLineBox>
          </GamerBox>
        </div>
        <BanBox onKeyDown={BanDataInput}>
          <StyledSpan name='banChampion'>밴 챔피언</StyledSpan>
          <BanInpuBox>
            <StyledInput name='ban' data-bannum='0' type='text' />
            <StyledInput name='ban' data-bannum='1' type='text' />
            <StyledInput name='ban' data-bannum='2' type='text' />
            <StyledInput name='ban' data-bannum='3' type='text' />
            <StyledInput name='ban' data-bannum='4' type='text' />
            <StyledInput name='ban' data-bannum='5' type='text' />
            <StyledInput name='ban' data-bannum='6' type='text' />
            <StyledInput name='ban' data-bannum='7' type='text' />
            <StyledInput name='ban' data-bannum='8' type='text' />
            <StyledInput name='ban' data-bannum='9' type='text' />
          </BanInpuBox>
        </BanBox>
        <SubContainer>
          <SubBox onChange={gameTimeData}>
            <StyledSpan name='endTime'>게임 종료 시간</StyledSpan>
            <StyledInput type='text' name='min' /> 분
            <StyledInput type='text' name='sec' /> 초
          </SubBox>
          <SubBox name='mvpBox' onChange={mvpMemverData}>
            <StyledSpan>MVP</StyledSpan>
            <StyledInput type='text' name='MVP' />
          </SubBox>
          <SubBox name='winTeamBox' onChange={winTeamData}>
            <StyledSpan name='winTeam'>승리팀</StyledSpan>
            <StyledInput name='winTeam' type='text' />
          </SubBox>
        </SubContainer>
        <StyledBtn type='submit' className='submit' value='작성하기' />
      </StyleInfoForm>
    </>
  );
}

export default SetMember;

const TitleH2 = styled.h2`
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
`;

const GameInfoDataBox = styled.div`
  width: 900;
  display: flex;
  flex-direction: column;

  margin-top: 15px;

  justify-content: center;
  align-items: center;

  div > input {
    width: 70px;

    margin-right: 10px;
    margin-left: 10px;
  }
`;
const StyleInfoForm = styled.form`
  width: 900px;

  border: 2px solid #e6e6e6;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 50px;
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

  /* justify-content: center; */
`;

const StyledSpan = styled.span`
  width: ${(props) => {
    if ((props.name === 'endTime') | (props.name === 'banChampion')) {
      return '110';
    } else if (props.name === 'KDA') {
      return '20';
    } else {
      return '50';
    }
  }}px;

  margin-right: ${(props) => {
    if (props.name === 'nickname') {
      return '50';
    } else if (props.name === 'endTime') {
      return '10';
    } else if (props.name === 'champion') {
      return '50';
    } else if ((props.name === 'KDA') | (props.name === 'winTeam')) {
      return '15';
    }
  }}px;
  margin-left: ${(props) => (props.name === 'nickname' ? '80' : '0')}px;
  margin-bottom: ${(props) => (props.name === 'banChampion' ? '5' : '0')}px;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

const StyledLineBox = styled.div`
  margin: 5px auto;
`;
const StyledInput = styled.input`
  width: ${(props) => {
    if (
      (props.name === 'rednickname') |
      (props.name === 'bluenickname') |
      (props.name === 'ban') |
      (props.name === 'redChampionName') |
      (props.name === 'blueChampionName') |
      (props.name === 'MVP')
    ) {
      return '100';
    } else if (
      (props.name === 'min') |
      (props.name === 'sec') |
      (props.name === 'winTeam')
    ) {
      return '70';
    } else if (
      (props.name === 'kill') |
      (props.name === 'death') |
      (props.name === 'assi')
    ) {
      return '30';
    }
  }}px;

  height: 20px;

  border: 1px solid #717171;
  border-radius: 10px;
  outline: none;

  margin-right: ${(props) =>
    (props.name === 'rednickname') |
    (props.name === 'bluenickname') |
    (props.name === 'redChampionName') |
    (props.name === 'blueChampionName') |
    (props.name === 'KDA')
      ? '5'
      : 0}px;

  box-sizing: border-box;
`;

const BanBox = styled.div`
  width: 830px;
  height: 100px;

  border: 1px solid #e6e6e6;
  box-sizing: border-box;

  margin: 10px auto;
  padding: 5px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const StyledBtn = styled.input`
  width: 200px;
  height: 70px;

  border: 2px solid #e6e6e6;
  background-color: #fff;

  margin: 10px auto;

  font-weight: bold;

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
  width: ${(props) => {
    if ((props.name === 'mvpBox') | (props.name === 'winTeamBox')) {
      return '200';
    } else {
      return '350';
    }
  }}px;
  height: 40px;

  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BanInpuBox = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  input {
    margin: 5px 20px;
  }
`;
