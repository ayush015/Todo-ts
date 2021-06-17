import axios from "axios";

type returnItems = {
  data: string[];
};

const instanceUrl = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchAPI(path: string) {
  return await instanceUrl
    .get(path)
    .then((response: returnItems) => {
      return response;
    })
    .catch((err: any) => {
      console.log(err);
    });
}
export async function postAPI(path: string, postData: any) {
  return await instanceUrl
    .post(path, postData)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err: any) => {
      console.log(err);
    });
}

export async function deleteAPI(path: string) {
  return await instanceUrl
    .delete(`${path}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}
