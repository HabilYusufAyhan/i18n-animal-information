// get animal data from api axios
import axios from "axios";

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
export const getAnimalData = async (animalName) => {
  try {
    const response = await axios.get(`${apiUrl}${animalName}`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching animal data:", error);
    throw error;
  }
};
