import React from "react";
import { Form, Navigate, useLocation, useNavigate, useRoutes } from "react-router-dom";
// import PrimarySearchAppBar from "layouts/page/LangdingPage";
// import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
import HeaderOne from "layouts/page/LangdingPage";
import jwt_decode from "jwt-decode";

// @mui icons

import DashboardLayout from "components/Layout/DashboardLayout";
import CandidiateAccountList from "layouts/page/admin/CandidateList";

// import JoinCampain from "./layouts/page/user/JoinCampaign";
import CandidateList from "layouts/page/user/Candidate";
import FeedBack from "layouts/page/user/FeedBack";
import CampaignList from "layouts/page/user/Campaign";
// import CampaignOwenrList from "layouts/page/user/CampaignOwner";

import ListQuestion from "layouts/page/user/Form/Voter/List Question/ListQuetion";
import DetailCandidate from "layouts/page/user/Form/Voter/Detail Voter/DetailVoter";
// import FormList from "layouts/page/user/Form";
// import JoinCampain from "layouts/page/user/Form/Voter/List Candidate/ListCandidate";
import HistoryUser from "layouts/page/user/Form/Voter/History/History";
import CampaignStage from "layouts/page/user/Campaign/CampaignStage";

import Hi from "layouts/page/Hi";
import Profile from "layouts/page/profile/Profile";
import AllCampaignList from "layouts/page/AllCampaign";
import TextT from "layouts/page/Text";
import ProfileCandidate from "layouts/page/user/Candidate/ProfileCandidate";
import CampaignOwenrList from "layouts/page/user/Campaign/CampaignOwner";
import ListForm from "layouts/page/user/ListForm";

//----------------------------------------------------------------
// const routePublic = ["/user/campaign/"];
export default function Router() {
  const ProtectedRouteAuthen = ({ roles, children }) => {
    const token = localStorage.getItem("token");

    try {
      const decoded = jwt_decode(token);
      if (token === null) {
        return <Navigate to="/" replace />;
      } else if (token && !decoded.RoleName) {
        return <Navigate to="/" replace />;
      } else if (roles.includes(decoded.RoleName)) {
        return <>{children}</>;
      }
    } catch (error) {
      return <Navigate to="/" replace />;
    }
    return <Navigate to="/" replace />;
  };

  const ProtectedRouteAuthorization = ({ children, isPublic }) => {
    const token = localStorage.getItem("token");
    if (isPublic) {
      return <>{children}</>;
    } else {
      //
      return <Navigate to="/" replace />;
    }
  };

  return useRoutes([
    {
      path: "/",
      element: <HeaderOne />,
    },
    {
      path: "/authentication/sign-in",
      element: <SignIn />,
    },
    {
      path: "/admin/",
      element: (
        <ProtectedRouteAuthen roles="admin">
          <DashboardLayout />
        </ProtectedRouteAuthen>
      ),
      children: [
        {
          path: "account",
          element: <CandidiateAccountList />,
        },
        {
          path: "history",
          element: <HistoryUser />,
        },
      ],
    },
    {
      path: "/user",
      element: (
        // <ProtectedRouteAuthen roles="user">
        <DashboardLayout />
        // </ProtectedRouteAuthen>
      ),
      children: [
        {
          path: "form",
          element: <ListForm />,
        },
        {
          path: "campaign",
          element: <CampaignList />,
        },
        {
          path: "campaignOwner",
          element: <CampaignOwenrList />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "test2",
          element: <TextT />,
        },
        {
          path: "test1",
          element: <Hi />,
        },
        {
          path: "history",
          element: <HistoryUser />,
        },

        {
          path: "allcampaign",
          element: <AllCampaignList />,
        },
        // {
        //   path: "campaignowner",
        //   element: <CampaignOwenrList />,
        // },
        {
          path: "candidate",
          element: <CandidateList />,
        },
        {
          path: "campaign/:id",
          element: (
            // <ProtectedRouteAuthorization isPublic={true}>
            <CampaignStage />
            // </ProtectedRouteAuthorization>
          ),
        },
        {
          path: "feedback",
          element: <FeedBack />,
        },
        {
          path: "template",
          element: <FeedBack />,
        },
        {
          path: "detailcandidate",
          element: <DetailCandidate />,
        },
        {
          path: "profilecandidate",
          element: <ProfileCandidate />,
        },
      ],
    },
  ]);
}
