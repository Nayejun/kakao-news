import Image from 'next/image';
import React from 'react';

import 대화 from '../../자산/메인페이지/대화.png';
import { ButtonComponent as 버튼 } from '../버튼/버튼';
import * as 예뻐져라_얍 from './메인꾸미기';

const 알림띄우기 = () => {
  alert('Clicked !');
};

export const 메인페이지 = () => {
  return (
    <예뻐져라_얍.감싸기>
      <예뻐져라_얍.윗쪽감싸기>
        <예뻐져라_얍.감싸기감싸기>
          <예뻐져라_얍.제목감싸기>
            <예뻐져라_얍.제목>KAKAO TEAM</예뻐져라_얍.제목>
            <예뻐져라_얍.서브제목>TECH NEWS</예뻐져라_얍.서브제목>
            <예뻐져라_얍.설명>
              카카오 팀의 실제 개발 사례를 중심으로 기술과 노하우를 전달합니다.
            </예뻐져라_얍.설명>
          </예뻐져라_얍.제목감싸기>
          <Image src={대화.src} width="600px" height="400px" />
        </예뻐져라_얍.감싸기감싸기>
      </예뻐져라_얍.윗쪽감싸기>
      <예뻐져라_얍.아랫쪽감싸기1>
        <예뻐져라_얍.아랫쪽감싸기2 />
        <버튼 onClick={알림띄우기}>구독하기</버튼>
      </예뻐져라_얍.아랫쪽감싸기1>
    </예뻐져라_얍.감싸기>
  );
};
