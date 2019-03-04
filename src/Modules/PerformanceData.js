import axios from "axios";
import { storeAuthHeaders } from "./Auth";

const apiUrl = "http://localhost:3000/api/v1";

const saveData = result => {
  const currentUser = JSON.parse(sessionStorage.getItem(["current_user"]));
  const headers = JSON.parse(sessionStorage.getItem("credentials"));
  const path = apiUrl + "/performance_data";
  return new Promise((resolve, reject) => {
    axios
      .post(
        path,
        {
          performance_data: { data: { message: result } },
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
