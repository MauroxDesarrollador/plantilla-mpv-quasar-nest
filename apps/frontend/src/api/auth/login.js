import { api } from '../../boot/axios';

export async function getListOfPlans() {
  const { data } = await api.get('/');
  console.log(data)
  return data;
} 
