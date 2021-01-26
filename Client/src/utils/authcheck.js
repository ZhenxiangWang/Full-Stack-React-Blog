import React, { useEffect, useContext } from "react";
import axios from "axios";
import history from "./history";
import Context from "./context";

import * as ACTIONS from "../store/actions/actions";

const AuthCheck = () => {
  const context = useContext(Context);

  useEffect(() => {
    if (context.authObj.isAuthenticated()) {
      const profile = context.authObj.userProfile;
      context.handleUserLogin();
      context.handleUserAddProfile(context.authObj.userProfile);
      axios
        .post("/api/posts/userprofiletodb", profile)
        .then(
          axios
            .get("/api/get/userprofilefromdb", {
              params: { email: profile.profile.email },
            })
            .then((res) => context.handleAddDBProfile(res.data))
        )
        .then(history.replace("/"));
      history.replace("/");
    } else {
      context.handleUserLogout();
      context.handleUserRemoveProfile();
      history.replace("/");
    }
  }, [context.authObj.userProfile, context]);

  return <div></div>;
};

export default AuthCheck;
