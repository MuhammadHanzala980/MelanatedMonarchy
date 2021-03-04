// import axios from "axios";
import request from "../utils/request";

export const nextStap = (data) => ({
  type: "nextStap",
  payload: data,
});

export const getImages = (data) => ({
  type: "getImages",
  payload: data,
});

export const openModel = (data) => ({
  type: "openModel",
  payload: data,
});

// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>

export function signUpUser(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/register",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function signInUser(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/login",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function upDateProfile(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/update_profile",
        method: "put",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function changePassword(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/change_password",
        method: "put",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function ForgetPassword(body) {
  console.log("Running");
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/forgot_password",
        method: "post",
        payload: body,
      })
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

export function newPassword(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/forgot_password",
        method: "post",
        payload: body,
      })
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}
// <<<<<<<<<<<<< Listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Listing >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Listing >>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<< Create Listing >>>>>>>>>>>>>>>>>>

export function createListing(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "listing/create_list",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

// <<<<<<<<<<<<< Get Listing >>>>>>>>>>>>>>>>>>

export function getListing(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: `listing/view_city_product_lists?city=karachi`,
        method: "get",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

// <<<<<<<<<<<<< Create Bidding >>>>>>>>>>>>>>>>>>

export function createBidding(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "bidding/create_bidding/",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

// <<<<<<<<<<<<< Get Bidding >>>>>>>>>>>>>>>>>>

export function getBidding(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: `bidding/get_bidding`,
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

// <<<<<<<<<<<<< Like Listing >>>>>>>>>>>>>>>>>>

export function likeListing(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: `listing/like_post/${body}`,
        method: "post",
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}
// <<<<<<<<<<<<< View Liked Posts >>>>>>>>>>>>>>>>>>

export function viewLikedPsts(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: `listing/view_liked_posts`,
        method: "get",
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

export function userProductList(body) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: `listing/view_user_product_lists`,
        method: "get",
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

// recent_published_post

// <<<<<<<<<<<<< Recent Published Post >>>>>>>>>>>>>>>>>>

export function recentPublished(body) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yy = today.getFullYear();
  var date = dd + "/" + mm + "/" + yy;
  var date2 = dd + "/" + mm + "/" + yy;

  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: `listing/recent_published_post?date1=${date}&date=${date2}`,
        method: "get",
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

export function billing(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "listing/billing",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
}

// export function user_signup(body) {
//   return (dispatch) => {
//     return new Promise(function (resolve, reject) {
//       axios
//         .post("https://service64.herokuapp.com/app/auth/signup", body)
//         .then((response) => {
//           resolve(response);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   };
