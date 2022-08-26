import { ButtonHTMLAttributes } from 'react';

import * as S from './버튼스타일';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  return <S.버튼 {...props} />;
};
