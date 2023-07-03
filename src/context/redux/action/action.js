/// gọi axios
import * as PathAction from "./../PathAction";
import jwt_decode from "jwt-decode";

import { URL_API } from "../../../config/axios/Url/URL";
import API from "../../../config/axios/API/API";
import { CustomizedToast } from "../../../components/toast/ToastCustom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export const createAction = ({ type, payload }) => {
  return { type, payload };
};

// const [isLoggedIn, setIsLoggedIn] = useState(false);

export const LoginAthen = (user, navigate) => {
  return async (dispatch) => {
    try {
      const res = await API("POST", URL_API + `/api/v1/Authen/login`, user);
      localStorage.setItem("token", res.data.data.token);
      const token = localStorage.getItem("token");
      const detoken = jwt_decode(token);

      dispatch(
        createAction({
          type: PathAction.LOGIN_USER,
          payload: res.data.data,
        })
      );
      if (detoken.RoleName === "user") {
        navigate("/user/campaign");
        CustomizedToast({
          message: "Đăng nhập thành công",
          type: "SUCCESS",
        });
      } else if (detoken.RoleName === "admin") {
        navigate("/admin/");
        CustomizedToast({
          message: "Đăng nhập thành công",
          type: "SUCCESS",
        });
      }
    } catch (error) {
      CustomizedToast({
        message: "Tên đăng nhập hoặc mật khẩu sai",
        type: "ERROR",
      });
    }
  };
};

export const loginFirebase = (idtoken, navigate) => {
  return async (dispatch) => {
    try {
      const res = await API("POST", URL_API + `/api/v1/authen/firebase?idtoken=${idtoken}`);
      console.log(res.data.data.token);
      localStorage.setItem("token", res.data.data.token);
      const token = localStorage.getItem("token");
      const detoken = jwt_decode(token);
      dispatch(
        createAction({
          type: PathAction.LOGIN_USER,
          payload: res.data.token,
        })
      );
      if (detoken.RoleName === "user") {
        navigate("/user/campaign");
        CustomizedToast({
          message: "Đăng nhập thành công",
          type: "SUCCESS",
        });
      } else if (detoken.RoleName === "admin") {
        // như trên
      }
    } catch (e) {
      console.log(e);
      CustomizedToast({
        message: "Tên đăng nhập hoặc mật khẩu sai",
        type: "ERROR",
      });
    }
  };
};

export const callAPIgetListForm = (token) => {
  return async (dispatch) => {
    try {
      const res = await API("GET", URL_API + `/api/v1/forms`, null, token);
      dispatch(
        createAction({
          type: PathAction.GET_LIST_FORM,
          payload: res.data.data,
        })
      );
    } catch (err) {}
  };
};

export const callAPIgetListCampaigns = (token) => {
  return async (dispatch) => {
    try {
      const res = await API("GET", URL_API + `/api/v1/campaigns`, null, token);
      dispatch(
        createAction({
          type: PathAction.GET_LIST_CAMPAIGNS,
          payload: res.data.data,
        })
      );
    } catch (err) {}
  };
};

export const callAPIgetListCandidates = (token) => {
  return async (dispatch) => {
    try {
      const res = await API("GET", URL_API + `/api/v1/candidates`, null, token);
      console.log(res);
      dispatch(
        createAction({
          type: PathAction.GET_LIST_CANDIDATE,
          payload: res.data.data,
        })
      );
    } catch (err) {}
  };
};

export const callAPIGetListAccounts = (token) => {
  return async (dispatch) => {
    try {
      const res = await API("GET", URL_API + `/api/v1/account`, null, token);
      dispatch(
        createAction({
          type: PathAction.GET_LIST_ACCOUNT,
          payload: res.data.data,
        })
      );
    } catch (err) {}
  };
};

export const callAPIgetListHistory = (userName, token) => {
  return async (dispatch) => {
    try {
      const res = await API("GET", URL_API + `/api/v1/action-histories/user`, userName, token);
      dispatch(
        createAction({
          type: PathAction.GET_LIST_HISTORY,
          payload: res.data.data,
        })
      );
    } catch (err) {}
  };
};
export const handleGetCampaignById = (id, navigate) => {
  return async (dispatch) => {
    try {
      const req = await API("GET", URL_API + `/api/v1/stages/campaign/${id}`, null);
      navigate(`/user/campaign/${id}`);
      console.log(req);
      dispatch(
        createAction({
          type: PathAction.GET_LIST_CAMPAINGSTAGEID,
          payload: req.data.data,
        })
      );
    } catch (error) {}
  };
};

export const handleGetCandidateByIdCampaign = (id, token) => {
  return async (dispatch) => {
    try {
      const req = await API("GET", URL_API + `/api/v1/candidates/campaign/${id}`, null, token);

      dispatch(
        createAction({
          type: PathAction.GET_LIST_CANDIDATE_CAMPAIGN,
          payload: req.data.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetCampaignbyUserId = (id, token) => {
  return async (dispatch) => {
    try {
      const req = await API("GET", URL_API + `/api/v1/campaigns/user/${id}`, null, token);

      dispatch(
        createAction({
          type: PathAction.GET_CAMPAIGN_OWNER,
          payload: req.data.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleGetQuestByIdCampaign = (id, token) => {
  return async (dispatch) => {
    try {
      const req = await API("GET", URL_API + `/api/v1/questions/form/${id}`, null, token);

      dispatch(
        createAction({
          type: PathAction.GET_LIST_QUESTIONS,
          payload: req.data.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleVote = (token, data) => {
  return async (dispatch) => {
    try {
      const req = await API("POST", URL_API + `/api/v1/vote`, data, token);

      dispatch(
        createAction({
          type: PathAction.SUBMIT_VOTE,
          payload: req.data.data,
        })
      );

      CustomizedToast({
        message: "Bình chọn thành công ",
        type: "SUCCESS",
      });
    } catch (error) {
      console.log(error);
      CustomizedToast({
        message: "Bình chọn thất bại",
        type: "SUCCESS",
      });
    }
  };
};
