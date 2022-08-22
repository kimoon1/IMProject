import React from 'react';
import styled from 'styled-components';

function Home() {
  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const redData = {
      redTopMember: '',
      redJgMember: '',
      redMidMember: '',
      redAdMember: '',
      redSupMember: '',
    };
    const blueData = {
      blueTopMember: '',
      blueJgMember: '',
      blueMidMember: '',
      blueAdMember: '',
      blueSupMember: '',
    };
    for (let i = 0; i < target.length; i++) {
      switch (target[i].name) {
        case 'redTopMember':
          redData.redTopMember = target[i].value;
          break;
        case 'redJgMember':
          redData.redJgMember = target[i].value;
          break;
        case 'redMidMember':
          redData.redMidMember = target[i].value;
          break;
        case 'redAdMember':
          redData.redAdMember = target[i].value;
          break;
        case 'redSupMember':
          redData.redSupMember = target[i].value;
          break;
        case 'blueTopMember':
          blueData.blueTopMember = target[i].value;
          break;
        case 'blueJgMember':
          blueData.blueJgMember = target[i].value;
          break;
        case 'blueMidMember':
          blueData.blueMidMember = target[i].value;
          break;
        case 'blueAdMember':
          blueData.blueAdMember = target[i].value;
          break;
        case 'blueSupMember':
          blueData.blueSupMember = target[i].value;
          break;
        default:
          break;
      }
    } // 반복문 종료

    console.log(redData);
    console.log(blueData);
  };
  return (
    <>
      <TitleH2>내전 전적 입력</TitleH2>
      <StyleInfoForm onSubmit={onSubmit}>
        <div className='container'>
          <GamerBox>
            <h4>블루진영</h4>
            <StyledLineBox>
              <StyledSpan>탑</StyledSpan>
              <StyledInput type='text' name='redTopMember' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>정글</StyledSpan>
              <StyledInput type='text' name='redJgMember' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>미드</StyledSpan>
              <StyledInput type='text' name='redMidMember' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>원딜</StyledSpan>
              <StyledInput type='text' name='redAdMember' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>서폿</StyledSpan>
              <StyledInput type='text' name='redSupMember' />
            </StyledLineBox>
          </GamerBox>
          <GamerBox>
            <h4>레드진영</h4>
            <StyledLineBox>
              <StyledSpan>탑</StyledSpan>
              <StyledInput type='text' name='blueTopMember' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>정글</StyledSpan>
              <StyledInput type='text' name='blueJgMember' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>미드</StyledSpan>
              <StyledInput type='text' name='blueMidMember' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>원딜</StyledSpan>
              <StyledInput type='text' name='blueAdMember' />
            </StyledLineBox>
            <StyledLineBox>
              <StyledSpan>서폿</StyledSpan>
              <StyledInput type='text' name='blueSupMember' />
            </StyledLineBox>
          </GamerBox>
        </div>
        <BanBox>밴영역</BanBox>
        <SubContainer>
          <SubBox>
            <StyledSpan>게임 종료 시간</StyledSpan>
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
  width: 1000px;

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
    border: 1px solid #717171;
    border-radius: 10px;
    outline: none;
    box-sizing: border-box;

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

const StyledSpan = styled.span`
  width: 150px;

  display: inline-block;
`;

const StyledLineBox = styled.div`
  margin: 5px auto;
`;
const StyledInput = styled.input`
  width: 200px;
  height: 20px;
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
