import axios from "axios";
import { CONNECTION_ERROR, OOMPA_LUMPA_BASE_URL } from "../constants";
import { getExpirationDate } from "../utils/date-utils";

export const getOompaLoompasByPageNumber = async (pageNumber = 1) => {
  try {
    const oompaLoompas = await axios.get(`${OOMPA_LUMPA_BASE_URL}?page=${pageNumber}`);
    const expirationDate = getExpirationDate(1);
    return { ...oompaLoompas.data, expires: expirationDate};
  } catch (error) {
    throw new Error(CONNECTION_ERROR);
  }
};

export const getOompaLoompaById= async (oompaLoompaId) => {
  try {
    const oompaLoompa = await axios.get(`${OOMPA_LUMPA_BASE_URL}/${oompaLoompaId}`);
    console.log(`This is the Oompa Loompa with id ${oompaLoompaId}`, oompaLoompa);
    return oompaLoompa.data;
  } catch (error) {
    throw new Error(CONNECTION_ERROR);
  }
}
