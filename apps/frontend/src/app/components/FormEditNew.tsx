import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { getModalInfo } from '../redux/selectors/studentModal.selector';
import Courses from './Courses';
interface InputProp {
  width?: string;
  marginRight?: string;
}
const Container = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  margin: 60px 49px 21px 49px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

const TitleItem = styled.div`
  display: flex;
  font-size: 11px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 2px;
`;
const Input = styled.input<InputProp>`
  border-radius: 5px;
  border: solid 1px #c9c9c9;
  height: 30px;
  margin-right: ${(props) => props.marginRight && `${props.marginRight}px`};
  width: ${(props) => props.width && `${props.width}px`};
`;
const Row = styled.div`
  display: flex;
`;

export default function FormEditNew() {
  const { data } = useAppSelector(getModalInfo);
  const { register, reset } = useFormContext();

  useEffect(() => {
    reset({ ...data });
  }, [data, reset]);

  return (
    <Container data-testid="form-edit-new">
      <Row>
        <Item>
          <TitleItem>Nombre</TitleItem>
          <Input
            width="181"
            marginRight="8"
            {...register('name', {
              required: true,
              minLength: 3,
            })}
          />
        </Item>
        <Item>
          <TitleItem>Apellidos</TitleItem>
          <Input
            width="181"
            {...register('lastname', {
              minLength: 3,
            })}
          />
        </Item>
      </Row>
      <Item>
        <TitleItem>Nombre de usuario</TitleItem>
        <Input
          {...register('username', {
            required: true,
            minLength: 3,
          })}
        />
      </Item>
      <Item>
        <TitleItem>Email</TitleItem>
        <Input
          {...register('email', {
            required: true,
            pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
          })}
        />
      </Item>
      <Item>
        <TitleItem>Móvil</TitleItem>
        <Input
          value={data?.phone}
          {...register('phone', {
            required: true,
            minLength: 9,
          })}
        />
      </Item>
    </Container>
  );
}
