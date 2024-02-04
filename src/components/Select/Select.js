import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
      {children}
      </NativeSelect>
      <DisplayedValue>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </DisplayedValue>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  width: max-content;
`

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
`

const DisplayedValue = styled.div`
  font-weight: 700;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right:10px;
  bottom: 0%;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;

`

export default Select;
