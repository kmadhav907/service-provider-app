import axios from 'axios';
const ENDPOINT = 'http://54.205.186.239:3000/api/v1';

export const getBikeBrands = async () => {
  const response = await axios.get(`${ENDPOINT}/client/bike/getBikesBrands`);
  return response;
};

export const getBikeDetailsList = async (id: string) => {
  const response = await axios.get(
    `${ENDPOINT}/client/bike/getBikeDetails/${id}`,
  );
  return response;
};

export const getBikeProblems = async () => {
  const response = await axios.get(`${ENDPOINT}/client/bike/getBikeProblems`);
  return response;
};

export const getFixitStatus = async (fixitId: string) => {
  const response = await axios.get(`${ENDPOINT}/getFixitStatus/${fixitId}`);
  return response;
};

export const sendNotifications = async (
  userId: string,
  description: string,
  model: string,
  fetchStatus: string,
  registrationNo: string,
) => {
  const reqData = {
    notificationType: 'CarService',
    longitude: '12.3.60',
    latitude: '12.3.60',
    vehicleType: model,
    vehicleNumber: registrationNo,
    vehicleProblemDescription: description,
  };

  const response = await axios.post(
    `${ENDPOINT}/notification/createNotification/${userId}`,
    reqData,
    {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
