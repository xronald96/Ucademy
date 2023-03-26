import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getModalInfo } from '../redux/selectors/studentModal.selector';
import { ModeType, setModalInfo } from '../redux/slices/studentModalSlice';
interface TextProp {
  active: boolean;
}
const Container = styled.div`
  display: flex;
`;
const Text = styled.div<TextProp>`
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  color: #262d34;
  font-size: 13px;
  font-weight: ${(props) => (props.active ? '600' : '400')};
  border-bottom: ${(props) => (props.active ? '5px solid #0ABB87' : 'none')};
  margin-right: 15px;
`;
export default function Tab() {
  const [selected, setSelected] = useState(1);
  const dispatch = useAppDispatch();
  const modalInfo = useAppSelector(getModalInfo);
  const [preMode] = useState(modalInfo.mode);
  
  const changeTab = (select: number, mode: ModeType) => {
    if (select !== selected) {
      setSelected(select);
      preMode === ModeType.NEW && select === 1
        ? dispatch(setModalInfo({ ...modalInfo, mode: ModeType.NEW }))
        : dispatch(setModalInfo({ ...modalInfo, mode }));
    }
  };

  return (
    <Container data-testid="tab">
      <Text
        data-testid="item-tab"
        active={selected === 1}
        onClick={() => changeTab(1, ModeType.VIEW)}
      >
        Perfil
      </Text>
      <Text
        data-testid="item-tab"
        active={selected === 2}
        onClick={() => changeTab(2, ModeType.COURSES)}
      >
        Cursos
      </Text>
    </Container>
  );
}
