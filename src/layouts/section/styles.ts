import styled from 'styled-components';

import { SectionProps } from './interfaces';

export const SectionStyled = styled.section<SectionProps>`
  background: ${(props) => props.bgColor};
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    padding: 12px 0;
  }
`
