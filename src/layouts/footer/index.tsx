import React, { FC } from 'react';

import { FooterProps } from './interfaces';
import { FooterStyled } from './styles';

export const Footer: FC<FooterProps> = (props) => {
  const { children, className } = props;
  return (
    <FooterStyled className={className}>
      {children}
    </FooterStyled>
  );
}
