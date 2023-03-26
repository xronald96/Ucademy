import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { async } from 'rxjs';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getModalInfo } from '../redux/selectors/studentModal.selector';
import { ModeType, setModalInfo } from '../redux/slices/studentModalSlice';
import { createStudent, updateStudent } from '../services/students.service';
import Courses from './Courses';
import FormEditNew from './FormEditNew';
import FormView from './FormView';
import Tab from './Tab';

interface ButtonProp {
  secondary?: boolean;
  onClick?: () => void;
}
const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  width: 480px;
  height: 611px;
  border-radius: 5px;
  flex-direction: column;
  background: #ffffff;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 16px 0px 30px;
`;
const ModalBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;
`;
const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 18px;
  padding-bottom: 16px;
`;
const Button = styled.div<ButtonProp>`
  height: 32px;
  font-family: 'Poppins', sans-serif;
  color: #262d34;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  background: ${(props) => (props.secondary ? 'white' : '#262d34')};
  color: ${(props) => (!props.secondary ? 'white' : '#262d34')};
  display: flex;
  align-items: center;
  padding: 0px 16px 0px 16px;
  margin-left: 8px;
  line-height: 22px;
  border: ${(props) => (props.secondary ? '1px solid #262d34' : 'none')};
  cursor: pointer;
`;

const EditContainer = styled.div`
  display: flex;
`;

export default function StudentModal({
  reFetchData,
}: {
  reFetchData: () => void;
}) {
  const modalInfo = useAppSelector(getModalInfo);
  const dispatch = useAppDispatch();
  const methods = useForm();

  const onSave = async (data: any) => {
    const result =
      modalInfo.mode === ModeType.NEW
        ? await createStudent(data)
        : await updateStudent(data, modalInfo.data._id);
    if (!result.error) {
      reFetchData();
      dispatch(setModalInfo({ show: false, mode: undefined }));
      methods.reset({});
    }
  };

  const onClose = () => {
    methods.reset({});
    dispatch(setModalInfo({ mode: undefined, show: false }));
  };

  return (
    <div>
      {modalInfo.show ? (
        <Container>
          <ModalContainer>
            <ModalHeader>
              <Tab />
              {modalInfo.mode === ModeType.VIEW ? (
                <Button
                  onClick={() =>
                    dispatch(
                      setModalInfo({ ...modalInfo, mode: ModeType.EDIT })
                    )
                  }
                >
                  Editar estudiante
                </Button>
              ) : (
                <EditContainer>
                  {modalInfo.mode === ModeType.EDIT && (
                    <Button
                      onClick={() =>
                        dispatch(
                          setModalInfo({ ...modalInfo, mode: ModeType.VIEW })
                        )
                      }
                      secondary
                    >
                      Cancelar edición
                    </Button>
                  )}
                  {(modalInfo.mode === ModeType.EDIT ||
                    modalInfo.mode === ModeType.NEW) && (
                    <Button onClick={methods.handleSubmit(onSave)}>
                      Guardar
                    </Button>
                  )}
                </EditContainer>
              )}
            </ModalHeader>
            <ModalBody>
              {modalInfo.mode === ModeType.VIEW && (
                <FormView data={modalInfo.data} />
              )}

              {(modalInfo.mode === ModeType.EDIT ||
                modalInfo.mode === ModeType.NEW) && (
                <FormProvider {...methods}>
                  <FormEditNew />
                </FormProvider>
              )}
              {modalInfo.mode === ModeType.COURSES && <Courses />}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} secondary>
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContainer>
        </Container>
      ) : null}
    </div>
  );
}