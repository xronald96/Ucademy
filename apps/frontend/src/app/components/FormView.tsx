import React from 'react';
import styled from 'styled-components';
import phoneIcon from '../../assets/phone.svg';
import calendarIcon from '../../assets/calendar.svg';
import emailIcon from '../../assets/email.svg';
import userIcon from '../../assets/user.svg';
import profileIcon from '../../assets/ProfileImg.svg';
const Container = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  margin: 33.5px 80px 21px 80px;
`;

const Item = styled.div`
  display: flex;
  border-bottom: 1px solid #cdcdcd;
  width: 100%;
  padding-bottom: 5px;
  padding-top: 5px;
  :last-child {
    border: none;
  }
`;

const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 24px;
  margin-top: 5px;
`;
const Img = styled.img`
  width: 16px;
  height: 19px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-bottom: 1px solid #cdcdcd;
  width: 100%;
  :last-child {
    border: none;
  }
`;

const InputTittle = styled.div`
  display: flex;
  font-size: 11px;
  font-family: 'Montserrat', sans-serif;
  align-items: flex-start;
  font-weight: 600;
  line-height: 24px;
  color: #000000;
`;

const Input = styled.div`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  border: none;
  border-bottom: 1px solid #cdcdcd;
  :last-child {
    border: none;
  }
  :focus {
    outline: none;
  }
`;

const ProfileImg = styled.div`
  display: flex;
  width: 138px;
  height: 138px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: 25.5px;
`;

const ProfileImgICon = styled.img`
  display: flex;
`;
export default function FormView({ data }: { data: any }) {
  return (
    <Container data-testid="form-view">
      <ProfileImg>
        <ProfileImgICon src={profileIcon} />
      </ProfileImg>
      <Item>
        <ContainerImg>
          <Img src={userIcon} />
        </ContainerImg>
        <InputContainer>
          <InputContainer>
            <InputTittle>Nombre y apellidos</InputTittle>
            <Input>{`${data?.name} ${data?.lastname || ''}`}</Input>
          </InputContainer>
          <InputContainer>
            <InputTittle>Nombre de usuario</InputTittle>
            <Input>{data?.username}</Input>
          </InputContainer>
        </InputContainer>
      </Item>
      <Item>
        <ContainerImg>
          <Img src={emailIcon} />
        </ContainerImg>
        <InputContainer>
          <InputTittle>Email</InputTittle>
          <Input>{data?.email}</Input>
        </InputContainer>
      </Item>
      <Item>
        <ContainerImg>
          <Img src={phoneIcon} />
        </ContainerImg>
        <InputContainer>
          <InputTittle>Móvil</InputTittle>
          <Input>{data?.phone}</Input>
        </InputContainer>
      </Item>
      <Item>
        <ContainerImg>
          <Img src={calendarIcon} />
        </ContainerImg>
        <InputContainer>
          <InputTittle>Fecha de inscripción</InputTittle>
          <Input>{data?.inscriptionDate.replaceAll('/', '-')}</Input>
        </InputContainer>
      </Item>
    </Container>
  );
}
