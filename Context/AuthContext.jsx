import React, { useState, useEffect, useCallback, useMemo } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  user: {
    name: "",
    img: "",
    email: "",
    role: "",
  },
  isAdmin: false,
  login: async(token) => {},
  logout: () => {},
  updateUser: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const remainingDuration = expirationTime - currentTime;
  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  if (!storedToken || !storedUser || !storedExpirationDate) return null;

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    user: JSON.parse(storedUser),
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken = null;
  let initialUser = {};
  let initialIsLoggedIn = false;

  if (tokenData) {
    initialToken = tokenData.token;
    initialUser = tokenData.user;
    initialIsLoggedIn = true;
  }

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(initialUser);
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
  const [isAdmin, setIsAdmin] = useState(initialUser.role === "ADMIN");

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUser({});
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token,user , expirationTime) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    const nowTime = new Date().getTime();
    const expirationTimeStamp = nowTime + expirationTime;
    localStorage.setItem("expirationTime", expirationTimeStamp);

    logoutTimer = setTimeout(logoutHandler, calculateRemainingTime(expirationTimeStamp));

    setToken(token);
    setUser(user);
    setIsLoggedIn(true);
    setIsAdmin(user.role === "ADMIN");
  };

  const updateUserHandler = (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsAdmin(updatedUser.role === "ADMIN");
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = useMemo(
    () => ({
      token,
      isLoggedIn,
      user,
      isAdmin,
      login: loginHandler,
      logout: logoutHandler,
      updateUser: updateUserHandler,
    }),
    [token, isLoggedIn, user, isAdmin, loginHandler, logoutHandler, updateUserHandler]
  );

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
