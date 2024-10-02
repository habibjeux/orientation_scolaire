import { Calendrier, Etablissement } from "@/types/models";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const get_calendar_by_etablissement = async (
  id: string
): Promise<Calendrier[]> => {
  const response = await axios.get(`${API_URL}/calendrier/etablissement/${id}`);
  return response.data;
};

export const get_calendar = async (id: string): Promise<Calendrier> => {
  const response = await axios.get(`${API_URL}/calendrier/${id}`);
  return response.data;
};

export const delete_calendar = async (id: string) => {
  const response = await axios.delete(`${API_URL}/calendrier/${id}`);
  return response.data;
};

export const add_calendar = async (data: any) => {
  const response = await axios.post(`${API_URL}/calendrier`, data);
  return response.data;
};

export const update_calendar = async (id: string, data: any) => {
  const response = await axios.put(`${API_URL}/calendrier/${id}`, data);
  return response.data;
};
