import axios from "axios";
import { storeAuthHeaders } from "./Auth";

const apiUrl = "http://localhost:3000/api/v1";

const saveData = (result, values) => {
  const { gender, distance, age } = values
  const currentUser = JSON.parse(sessionStorage.getItem(["current_user"]));
  const headers = JSON.parse(sessionStorage.getItem("credentials"));
  const path = apiUrl + "/performance_data";
  return new Promise((resolve, reject) => {
    axios
      .post(
        path,
        {
          performance_data: {
            data: {
              message: result,
              gender: gender,
              distance: distance,
              age: age
            }
          },
          user_id: currentUser.id
        },
        {
          headers: headers
        }
      )
      .then(response => {
        storeAuthHeaders(response);
        resolve(response.data.message);
      });
  });
};

const getData = () => {
  const headers = JSON.parse(sessionStorage.getItem(["credentials"]));
  const path = apiUrl + "/performance_data";
  return new Promise((resolve, reject) => {
    axios
      .get(path, {
        headers: headers
      })
      .then(response => {
        storeAuthHeaders(response);
        resolve(response);
      });
  });
};

export { saveData, getData };
