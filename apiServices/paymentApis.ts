import {Buffer} from 'buffer';
import axios from 'axios';
const ENDPOINT = 'http://54.205.186.239:3000/api/v1';
const RAZORPAY_KEY = 'rzp_test_L1mqzNPlHxpD9z';
const RAZORPAY_PASSWORD = 'Js6vPTD5UAvOwc6FW9rWbrus';

const token = Buffer.from(
  `${RAZORPAY_KEY}:${RAZORPAY_PASSWORD}`,
  'utf8',
).toString('base64');

export const payAmount = async (amount: any) => {
  const params = JSON.stringify({
    amount: amount,
  });
  const response = await axios.post(`${ENDPOINT}/payamount?amount=${amount}`, {
    headers: {
      'content-type': 'application/json',
    },
  });
  return response;
};
