import React, { FC } from 'react';

import { SectionProps } from './interfaces';
import { SectionStyled } from './styles';

export const Section: FC<SectionProps> = (props) => {
  const { children, className, bgColor } = props;
  return (
    <SectionStyled className={className} bgColor={bgColor}>
      {children}
    </SectionStyled>
  )
}