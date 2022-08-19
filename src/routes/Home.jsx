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
    <main onSubmit={onSubmit}>
      <h2>Code Clan</h2>
      <div className='container'>
        <form>
          <input type='date' name='gameInfoDate' />
          <GamerBox>
            <span>탑</span>
            <input type='text' name='redTopMember' />
            <span>정글</span>
            <input type='text' name='redJgMember' />
            <span>미드</span>
            <input type='text' name='redMidMember' />
            <span>원딜</span>
            <input type='text' name='redAdMember' />
            <span>서폿</span>
            <input type='text' name='redSupMember' />
          </GamerBox>
          <GamerBox>
            <span>탑</span>
            <input type='text' name='blueTopMember' />
            <span>정글</span>
            <input type='text' name='blueJgMember' />
            <span>미드</span>
            <input type='text' name='blueMidMember' />
            <span>원딜</span>
            <input type='text' name='blueAdMember' />
            <span>서폿</span>
            <input type='text' name='blueSupMember' />
          </GamerBox>
          <input type='submit' value='작성하기' />
        </form>
      </div>
    </main>
  );
}

export default Home;

const GamerBox = styled.div`
  width: 400px;

  display: inline-flex;
  flex-direction: column;

  border: 2px solid #e6e6e6;
`;
