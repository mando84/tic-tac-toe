import axios from "axios";

const API_URL = "api/records/";

const createRecord = async (recordData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "game", recordData, config);

  return response.data;
};

const getRecords = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const recordService = {
  createRecord,
  getRecords,
};

export default recordService;
