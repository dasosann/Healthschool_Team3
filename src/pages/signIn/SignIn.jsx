import React, { useState } from 'react';
import Logo from '../layout/_component/Logo/Logo';
import BasicInput from '../../components/Input/BasicInput/BasicInput';
import BasicCheckBox from '../../components/checkbox/BasicCheckBox';
import BasicButton from '../../components/button/BasicButton';
import S from './style';
import { Link, useNavigate } from 'react-router-dom';
import FindUser from './_component/findUser/FindUser';
import FindPassword from './_component/FindPassword/FindPassword';

const SignIn = () => {
  const [inputState, setInputState] = useState('');
  // 체크박스
  const [isChecked, setIsChecked] = useState(false);

  const [id, setId] = useState(''); // 아이디
  const [password, setPassword] = useState(''); // 비밀번호
  const [isFindUserOpen, setIsFindUserOpen] = useState(false); // 모달 상태
  const [isFindPasswordOpen, setIsFindPasswordOpen] = useState(false); // 모달 상태

  //
  const navigate = useNavigate();


  const locationGoogle = () => {
    localStorage.removeItem("jwtToken")
    window.location.href = "http://localhost:8000/auth/google";
  }
  const locationKakao = () => {
    localStorage.removeItem("jwtToken")
    window.location.href = "http://localhost:8000/auth/kakao";
  }
  const locationNaver = () => {
    localStorage.removeItem("jwtToken")
    window.location.href = "http://localhost:8000/auth/naver";
  }

  //로그인 버튼 클릭
  const handleLogin = async () => {
    localStorage.removeItem("jwtToken")
    try {
      const response = await fetch(`http://localhost:8000/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: id,
          password: password
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || '로그인에 성공했습니다.');
        localStorage.setItem("jwtToken", result.jwtToken);
        navigate("/");
      } else {
        throw new Error(result.message || '로그인에 실패했습니다.');
      }

    } catch (error) {
      console.error('Error:', error.message);
      alert(error.message);
    }

  }

  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.FormWrapper>
        <BasicInput
          width={'336px'}
          height={'43px'}
          state={inputState}
          errorText={''}
          susccessText={'아주 좋습니다!!'}
          placeHolderText={'아이디'}
          onChange={(e) => setId(e.target.value)}
        />
        <BasicInput
          width={'336px'}
          height={'43px'}
          type={'password'}
          state={inputState}
          errorText={''}
          susccessText={'아주 좋습니다!!'}
          placeHolderText={'비밀번호'}
          onChange={(e) => setPassword(e.target.value)} // 입력값 업데이트
        />
      </S.FormWrapper>
      <S.CheckWrapper>
        <BasicCheckBox
          label="로그인 상태 유지"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.label)}
        />
        <BasicCheckBox
          label="아이디 저장"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.label)}
        />
      </S.CheckWrapper>
      <S.ButtonWrapper >
        <BasicButton
          size={'full'}
          shape={'small'}
          variant={'primary'}
          color={'white'}
          onClick={handleLogin}
        >로그인</BasicButton>
        <p>또는</p>
        <div>
          <S.IconButton onClick={locationGoogle}>
            <img src={process.env.PUBLIC_URL + "/images/sign/google.png"} alt="google"></img>
          </S.IconButton>
          <S.IconButton onClick={locationKakao}>
            <img src={process.env.PUBLIC_URL + "/images/sign/kakao.png"} alt="kakao"></img>
          </S.IconButton>
          <S.IconButton onClick={locationNaver}>
            <img src={process.env.PUBLIC_URL + "/images/sign/naver.png"} alt="naver"></img>
          </S.IconButton>
        </div>
        <S.FindWrapper>
          <Link onClick={() => setIsFindUserOpen(true)}>
            <p>아이디 찾기</p>
          </Link>
          <Link onClick={() => setIsFindPasswordOpen(true)}>
            <p>비밀번호 찾기</p>
          </Link>
          <Link to={'/signUp'}>
            <p>회원가입</p>
          </Link>
        </S.FindWrapper>
      </S.ButtonWrapper >

      {/* FindUser 모달 */}
      {isFindUserOpen && (
        <S.ModalContainer onClick={() => setIsFindUserOpen(false)}>
          <S.ModalStyle onClick={(e) => e.stopPropagation()}>
            <FindUser />
          </S.ModalStyle>
        </S.ModalContainer>
      )}

      
      {/* FindPassword 모달 */}
      {isFindPasswordOpen && (
        <S.ModalContainer onClick={() => setIsFindPasswordOpen(false)}>
          <S.ModalStyle onClick={(e) => e.stopPropagation()}>
            <FindPassword />
          </S.ModalStyle>
        </S.ModalContainer>
      )}
    </S.Container>
  );
};

export default SignIn;