import { GerantEtablissement } from "@/types/models";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const add_gerant = async (data: any) => {
  return await axios.post(`${API_URL}/gerant`, data);
};

export const get_gerants = async (): Promise<GerantEtablissement[]> => {
  const response = await axios.get(`${API_URL}/gerant`);
  return response.data;
};

export const get_gerant = async (id: string): Promise<GerantEtablissement> => {
  const response = await axios.get(`${API_URL}/gerant/${id}`);
  return response.data;
};

export const update_gerant = async (id: string, data: any) => {
  return await axios.put(`${API_URL}/gerant/${id}`, data);
};

export const delete_gerant = async (id: string) => {
  return await axios.delete(`${API_URL}/gerant/${id}`);
};

export const assign_etablissement = async (data: any) => {
  const response = await axios.put(
    `${API_URL}/gerant/assign-etablissement`,
    data
  );
  return response.data;
};
