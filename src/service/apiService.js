import axios from "axios";

export class EmotionTypeService {
  baseUrl = "http://localhost:8080/api/v1/emotion-types";

  // Obtener opciones de solicitud (sin token, usando localStorage si es necesario)
  getRequestOptions() {
    const user = JSON.parse(localStorage.getItem("user")); // Obtener usuario desde localStorage
    return {
      headers: {
        "Content-Type": "application/json",
        ...(user && user.id ? { "X-User-ID": user.id } : {}), // Agregar encabezado opcional con el ID del usuario
      },
    };
  }

  // Obtener todos los EmotionTypes
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

  // Obtener un EmotionType por ID
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

  // Crear un nuevo EmotionType
  createEmotionType(emotionType) {
    return axios
      .post(this.baseUrl, emotionType, this.getRequestOptions())
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error creating EmotionType:", error);
        throw error;
      });
  }

  // Actualizar un EmotionType
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

  // Eliminar un EmotionType
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
