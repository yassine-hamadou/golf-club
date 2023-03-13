import axios from "axios";
import { API_URL } from "../../../urls";

export const getMembers: any = () => {
   return axios.get(`${API_URL}/members`);
}

export const postMember: any = (data: any) => {
   return axios.post(`${API_URL}/members`, data);
}
