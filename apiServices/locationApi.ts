import axios from 'axios';
const ENDPOINT = 'http://54.205.186.239:3000/api/v1';
export const saveLocation = async (
  userId: string,
  latitude: number,
  longitude: number,
) => {
  const data = JSON.stringify({
    latitude: latitude,
    longitude: longitude,
  });
  const response = await axios.post(
    `${ENDPOINT}/client/location/userSaveLocation/${userId}`,
    data,
    {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
