import React from 'react';
import styled from 'styled-components';
import InfoIcon from '../../assets/Info.svg';
import { useAppDispatch } from '../hooks/redux';
import { ModeType, setModalInfo } from '../redux/slices/studentModalSlice';
import StudentModal from './StudentModal';
interface ItemProp {
  bold?: boolean;
}
interface ConnectionProp {
  isOnline: boolean;
}
const TableContainer = styled.table`
  margin-top: 29px;
  margin-left: 29px;
  margin-right: 109px;
  border-collapse: collapse;
`;
const TheadContainer = styled.thead`
  text-align: left;
  border-bottom: 2px solid #262d34;
`;
const TbodyContainer = styled.tbody`
  text-align: left;
`;

const Th = styled.th<ItemProp>`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 13px;
  padding-bottom: 10px;
  :first-child {
    padding-left: 21px;
  }
`;

const Tr = styled.tr`
  border-bottom: 1px solid #cdcdcd;
`;
const Td = styled.td`
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  height: 50px;
  :first-child {
    padding-left: 21px;
    text-align: center;
  }
`;

const InfoImg = styled.img``;

const ConexionTag = styled.div<ConnectionProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.isOnline ? '#0ABB87' : '#f0f4f3')};
  width: 45px;
  color: #262d34;
  height: 18px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 300px;
  font-family: 'Poppins', sans-serif;
  border: ${(props) => (props.isOnline ? 'none' : '0.5px solid #9e9e9e')};
`;
export default function Table({ data }: { data: any[] }) {
  const dispatch = useAppDispatch();

  const openModal = (student: any) => {
    dispatch(setModalInfo({ mode: ModeType.VIEW, show: true, data: student }));
  };
  return (
    <TableContainer data-testid="table">
      <TheadContainer>
        <Tr>
          <Th>Conexión</Th>
          <Th>Nombre y apellidos</Th>
          <Th>Nombre de usuario</Th>
          <Th>Email</Th>
          <Th>Móvil</Th>
        </Tr>
      </TheadContainer>
      <TbodyContainer>
        {data &&
          data.map((student) => {
            return (
              <Tr key={student._id}>
                <Td>
                  <ConexionTag isOnline={student.isOnline}>
                    {student.isOnline ? 'Online' : 'Offline'}
                  </ConexionTag>
                </Td>
                <Td>
                  {student.name} {student.lastname}
                </Td>
                <Td>{student.username}</Td>
                <Td>{student.email}</Td>
                <Td>{student.phone}</Td>
                <Td>
                  <InfoImg
                    data-testid="info-icon"
                    onClick={() => openModal(student)}
                    src={InfoIcon}
                  />
                </Td>
              </Tr>
            );
          })}
      </TbodyContainer>
    </TableContainer>
  );
}
