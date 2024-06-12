import axios from 'axios';
const ENDPOINT = 'http://54.205.186.239:3000/api/v1';
export const getOTPForAuthorization = async (phoneNumber: string) => {
  const reqData = {
    phoneNumber: phoneNumber,
    userType: 'user',
  };

  const response: any = await axios.post(
    `${ENDPOINT}/client/login/requestOtp`,
    reqData,
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  return response;
};

export const verifyOTPForAuthorization = async (
  phoneNumber: string,
  otpToVerify: string,
) => {
  const params = JSON.stringify({
    phoneNo: phoneNumber,
    otpFromUser: otpToVerify,
  });
  console.log('IN HERE ::: ', ENDPOINT);
  const response = await axios.post(
    `${ENDPOINT}/client/login/verifyOtp`,
    params,
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  // const response = {
  // data: {
  // OtpVerification: true,
  // userId: "lknjejnnj",
  // newUser: true,
  // userPhoneNumber: '6360406482'
  // }}
  return response;
};
export const resendOTP = async (phoneNumber: string) => {
  const response: any = await axios.get(
    `${ENDPOINT}/client/login/resendOtp/${phoneNumber}/user`,
  );
  return response;
};
