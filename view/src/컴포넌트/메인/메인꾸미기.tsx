import styled from '@emotion/styled';

const 가운데정렬 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const 감싸기 = styled(가운데정렬)`
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;
export const 윗쪽감싸기 = styled(가운데정렬)`
  width: 100%;
  height: 50%;
  background: linear-gradient(180deg, #c9f1ec 0%, #d8ecff 100%);
`;
export const 아랫쪽감싸기 = styled(가운데정렬)`
  width: 100%;
  height: 50%;
  background-color: #f6fffe;
`;
export const 제목감싸기 = styled(가운데정렬)`
  width: 50vh;
  height: 50%;
  flex-direction: column;
`;
export const 제목 = styled.p`
  width: 50vh;
  color: #ffd600;
  font-size: 3.75rem;
  font-weight: bolder;
  text-align: left;
`;
export const 서브제목 = styled(제목)`
  color: #000000;
  font-weight: 500;
`;
