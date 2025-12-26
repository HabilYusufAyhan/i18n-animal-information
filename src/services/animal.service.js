// get animal data from api axios
import axios from "axios";
import i18n from "../config/i18n";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const getAnimalData = async (animalName) => {
  const language = (i18n.language || "en").slice(0, 2);
  const wikiBase = `https://${language}.wikipedia.org`;
  const title = (animalName || "").trim().replace(/ /g, "_");
  const urlWithLang = `${wikiBase}/api/rest_v1/page/summary/${encodeURIComponent(
    title
  )}`;
  try {
    const response = await axios.get(urlWithLang);
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error fetching animal data:", error);
    throw error;
  }
};
