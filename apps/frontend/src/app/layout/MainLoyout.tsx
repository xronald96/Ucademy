import React, { ReactNode } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: -8px !important;
  overflow-x: hidden;
`;
const Body = styled.div`
  display: flex;
  flex: 1;
`;

const Page = styled.div`
  display: flex;
  flex: 1;
`;

export default function MainLoyout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <NavBar />
      <Body>
        <SideBar />
        <Page>{children}</Page>
      </Body>
    </Container>
  );
}
