import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    iconSize: 16,
    fontSize: 14 / 16,
    borderThickness: 1,
    height: 24,
  },
  'large': {
    iconSize: 24,
    fontSize: 18 / 16,
    borderThickness: 2,
    height: 36,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const style = SIZES[size];

  if (!style) throw new Error("Unsupported size!");

  return <Wrapper style={{'--iconSize': style.iconSize+'px', '--fontSize':style.fontSize+'rem'}}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper>
      <Icon id={icon} size={style.iconSize} />
    </IconWrapper>
    <TextInput
      {...delegated}
      style={{
        '--width': `${width}px`,
        '--height': `${style.height / 16}rem`,
        '--borderThickness': `${style.borderThickness}px`
      }}
      />
  </Wrapper>
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`


const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--fontSize);
  padding-left: var(--height);
  font-weight: 700;
  color: inherit;
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--iconSize);
`;

export default IconInput;
