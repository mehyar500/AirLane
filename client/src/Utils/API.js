import axios from "axios";

export default {
  // Gets all user
  getUsers: () => {
    axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: id => {
    axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: id => {
    axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: userData => {
    // console.log(userData);
    axios.post("/signup", userData);
  },
  // Saves a user profile to the database
  saveProfile: profileData => {
      axios.post("/profile", profileData);
    },
  //login user
  loginUser: userData => {
    axios.post("/login", userData);
  },
  //check if user is authenticated
  userAuth: () => {
    axios.get("/userauth").then(res => {console.log(res); return res}).catch(err => {throw err});
  },
  // Gets all Plane
  getPlanes: () => {
    axios.get("/api/aircraft");
  },
  // Gets the Plane with the given id
  getPlane: id => {
    axios.get("/api/aircraft" + id);
  },
  // Deletes the Plane with the given id
  deletePlane: id => {
    axios.delete("/api/aircraft" + id);
  },
  // Saves a Plane to the database
  savePlane: planeData => {
    axios.post("/api/aircraft", planeData);
  },
  //Gets all Lanes
  getLanes: () => {
    axios.get("/api/airlane");
  },
  // Gets the Lane with the given id
  getLane: id => {
    axios.get("/api/airlane" + id);
  },
  // Deletes the Lane with the given id
  deleteLane: id => {
    axios.delete("/api/airlane" + id);
  },
  // Saves a Lane to the database
  saveLane: laneData => {
    axios.post("/api/airlane", laneData);
  }
};