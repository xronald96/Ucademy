import React from 'react';
import styled from 'styled-components';
import icon from '../../assets/Dashboard.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemNav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 34px 22px 34px 21px;
`;
const ItemNavText = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #262d34;
  font-size: 15px;
  font-weight: 400;
`;

const Icon = styled.img`
  margin-right: 17px;
`;
export default function SideBar() {
  return (
    <Container data-testid="side-bar">
      <ItemNav>
        <Icon data-testid="dashboard-icon" src={icon} />
        <ItemNavText>Dashboard</ItemNavText>
      </ItemNav>
    </Container>
  );
}
