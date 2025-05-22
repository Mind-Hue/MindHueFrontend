import axios from "axios";

export class EmotionTypeService {
  baseUrl = "http://localhost:8080/api/v1/emotion-types";

  
  getRequestOptions() {
    const user = JSON.parse(localStorage.getItem("user")); 
    return {
      headers: {
        "Content-Type": "application/json",
        ...(user && user.id ? { "X-User-ID": user.id } : {}), 
      },
    };
  }

  
  getAllEmotionTypes() {
    console.log("Fetching all EmotionTypes...");
    return axios
      .get(this.baseUrl, this.getRequestOptions())
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching EmotionTypes:", error);
        throw error;
      });
  }

  
  getEmotionTypeById(id) {
    const url = `${this.baseUrl}/${id}`;
    return axios
      .get(url, this.getRequestOptions())
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Error fetching EmotionType with ID ${id}:`, error);
        throw error;
      });
  }

 
  createEmotionType(emotionType) {
    return axios
      .post(this.baseUrl, emotionType, this.getRequestOptions())
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error creating EmotionType:", error);
        throw error;
      });
  }


  updateEmotionType(id, updatedEmotionType) {
    const url = `${this.baseUrl}/${id}`;
    return axios
      .put(url, updatedEmotionType, this.getRequestOptions())
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Error updating EmotionType with ID ${id}:`, error);
        throw error;
      });
  }

 
  deleteEmotionType(id) {
    const url = `${this.baseUrl}/${id}`;
    return axios
      .delete(url, this.getRequestOptions())
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Error deleting EmotionType with ID ${id}:`, error);
        throw error;
      });
  }
}
