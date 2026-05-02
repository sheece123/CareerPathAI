import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const uploadResume = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await api.post("/resume-analysis", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data.data;
};

export const skillGapManual = async (payload: any) => {
  const res = await api.post("/skill-gap/manual", payload);
  return res.data.data;
};


export const predictCareer = async (payload: any) => {
  const res = await api.post("/predict-career", payload);
  return res.data.data;
};

export default api;