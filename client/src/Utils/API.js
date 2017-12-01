import axios from "axios";

export default {
  // Gets all user
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/signup", userData);
  },
  //login user
  login: function(userData) {
    return axios.get("/login", userData);
  },
  //check if user is authenticated
  userAuth: function() {
    return axios.get("/userauth");
  },
    // Gets all Plane
  getPlanes: function() {
    return axios.get("/api/aircraft");
  },
  // Gets the Plane with the given id
  getPlane: function(id) {
    return axios.get("/api/aircraft" + id);
  },
  // Deletes the Plane with the given id
  deletePlane: function(id) {
    return axios.delete("/api/aircraft" + id);
  },
  // Saves a Plane to the database
  savePlane: function(planeData) {
    return axios.post("/api/aircraft", planeData);
  }
};