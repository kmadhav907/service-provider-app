import axios from 'axios';
const ENDPOINT = 'http://54.205.186.239:3000/api/v1';

export const getUserProfile = async (userId: string) => {
  const response = await axios.get(
    `${ENDPOINT}/client/getUserProfile/${userId}`,
  );
  return response;
};

export const getUserBikeDetails = async (userId: string) => {
  const response = await axios.get(`${ENDPOINT}/client/getMyBike/${userId}`);
  return response;
};
