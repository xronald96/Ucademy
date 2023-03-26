import PlusIcon from '../../assets/Plus.svg';
import styled from 'styled-components';
const NewStudentButton = styled.div`
  display: flex;
  width: 170px;
  height: 50px;
  background-color: #0abb87;
  color: white;
  border-radius: 8px;
  align-items: center;
  margin-top: 35px;
  margin-left: 51px;
`;
const PlusImage = styled.img`
  margin-left: 13.08px;
  margin-right: 4.62px;
`;
const ButtonText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
`;
export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <NewStudentButton onClick={onClick}>
      <PlusImage src={PlusIcon} />
      <ButtonText>{text}</ButtonText>
    </NewStudentButton>
  );
}
