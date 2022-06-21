import axios from "axios";
import { CONNECTION_ERROR, OOMPA_LUMPA_BASE_URL } from "../constants";
import { setExpirationDate } from "../utils/date-utils";

export const getOompaLoompasByPageNumber = async (pageNumber = 1) => {
  try {
    const oompaLoompas = await axios.get(`${OOMPA_LUMPA_BASE_URL}?page=${pageNumber}`);
    const expirationDate = setExpirationDate(1);
    return { ...oompaLoompas.data, expires: expirationDate};
  } catch (error) {
    throw new Error(CONNECTION_ERROR);
  }
};

export const getOompaLoompaById= async (oompaLoompaId) => {
  try {
    const oompaLoompa = await axios.get(`${OOMPA_LUMPA_BASE_URL}/${oompaLoompaId}`);
    return oompaLoompa.data;
  } catch (error) {
    throw new Error(CONNECTION_ERROR);
  }
}
