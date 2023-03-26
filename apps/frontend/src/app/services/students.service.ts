import { environment } from '../../environments/environment';

const PATH = '/users';
export const getStudents = async () => {
  const fullURL = `${environment.URL_API}${PATH}`;
  return fetch(fullURL).then((res) => res.json());
};

export const createStudent = async (newStudent: any) => {
  const fullURL = `${environment.URL_API}${PATH}`;
  return fetch(fullURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': 'token-value',
    },
    body: JSON.stringify({ createUserDto: { ...newStudent } }),
  }).then((res) => res.json());
};

export const updateStudent = async (newStudent: any, userID: string) => {
  const fullURL = `${environment.URL_API}${PATH}/${userID}`;
  return fetch(fullURL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': 'token-value',
    },
    body: JSON.stringify({ updateUserDto: { ...newStudent } }),
  }).then((res) => res.json());
};
