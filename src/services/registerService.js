import api from '../api/axiosInstance';

export const registerUser = (data) => {
  const { fullName, email, phone, password } = data;
  return api.post('/api/register', { fullName, email, phone, password });
};
