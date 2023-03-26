import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Button from '../components/Button';
import StudentModal from '../components/StudentModal';
import Table from '../components/Table';
import { useAppDispatch } from '../hooks/redux';
import { ModeType, setModalInfo } from '../redux/slices/studentModalSlice';
import { getStudents } from '../services/students.service';
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export default function StudentsPage() {
  const dispath = useAppDispatch();
  const { data, refetch } = useQuery<any, Error>('students', getStudents);

  return (
    <Container>
      <StudentModal reFetchData={refetch} />
      <Button
        onClick={() =>
          dispath(setModalInfo({ mode: ModeType.NEW, show: true }))
        }
        text={'Nuevo estudiante'}
      />
      <Table data={data} />
    </Container>
  );
}
