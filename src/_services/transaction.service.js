import axios from "axios";

export const userService = {
  login,
  logout
};

function login(username, password) {
  const LocalUrl = "";
  const config = {
    headers: {
      "Content-Type": "application/json",
      preferred_locale: "en",
      channel: "",
      deviceId: "",
      "User-Agent": "PostmanRuntime/7.13.0",
      Accept: "*/*",
      Host: "",
      Connection: "keep-alive"
    }
  };
  const data = {
    userName: username,
    passWord: password
  };

  return axios
    .post(LocalUrl, data, config)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
  console.log("REMOVED");
}

function handleResponse(response) {
  const data = response.data;
  console.log("data");
  console.log(data);
  if (!data.res) {
    if (data.status === 401) {
      logout();
      window.location.reload(true);
    }
    const error = data.response.msg;
    return Promise.reject(error);
  }
  return data;
}
