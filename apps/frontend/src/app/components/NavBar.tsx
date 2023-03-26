import React from 'react';
import styled from 'styled-components';

const Contianer = styled.div`
  display: flex;
  width: 100%;
  height: 4%;
  background: #262d34;
  justify-content: start;
  padding: 32px;
`;
const Image = styled.img``;

export default function NavBar() {
  return (
    <Contianer>
      <Image
        width={155}
        src="https://ucademy.com/wp-content/uploads/2023/03/logo-png.png"
      />
    </Contianer>
  );
}
