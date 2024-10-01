import { Etablissement } from "@/types/models";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const get_etablissements = async (): Promise<Etablissement[]> => {
  const response = await axios.get(`${API_URL}/etablissement`);
  return response.data;
};

export const get_etablissement = async (id: string): Promise<Etablissement> => {
  const response = await axios.get(`${API_URL}/etablissement/${id}`);
  return response.data;
};

export const add_etablissement = async (data: any) => {
  const response = await axios.post(`${API_URL}/etablissement`, data);
  return response.data;
};

export const update_etablissement = async (
  id: string,
  data: any
): Promise<Etablissement> => {
  const response = await axios.put(`${API_URL}/etablissement/${id}`, data);
  return response.data;
};

export const delete_etablissement = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/etablissement/${id}`);
};
