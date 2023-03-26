import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { getModalInfo } from '../redux/selectors/studentModal.selector';
interface BarProp {
  width: string;
}
const Container = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  margin: 60px 49px 21px 49px;
  overflow: hidden;
  overflow-y: scroll;
`;

const ContainerBar = styled.div`
  box-sizing: content-box;
  height: 12px; /* Can be anything */
  position: relative;
  background: #f0f4f3;
  border-radius: 5px;
  width: 380px;
  margin-right: 5px;
`;

const Bar = styled.span<BarProp>`
  width: ${(props) => `${props.width}%`};
  display: block;
  height: 100%;
  border-radius: 5px;
  background: linear-gradient(90deg, #0abb87 6.77%, #6fd466 93.23%);
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  display: flex;
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #767676;
  margin-top: 6px;
  line-height: 24px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Percentage = styled.div`
  display: flex;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;
export default function Courses() {
  const modalInfo = useAppSelector(getModalInfo);
  return (
    <Container data-testid="courses">
      {modalInfo?.data?.courses?.map((course: any) => {
        return (
          <div data-testid="course-item" key={course._id}>
            <Title>{course.title}</Title>
            <Row>
              <ContainerBar>
                <Bar width={course.percentCompleted}></Bar>
              </ContainerBar>
              <Percentage>{course.percentCompleted}%</Percentage>
            </Row>
            <SubTitle>
              Fecha de inscripción {course.inscriptionDate.replaceAll('/', '-')}
            </SubTitle>
          </div>
        );
      })}
    </Container>
  );
}
