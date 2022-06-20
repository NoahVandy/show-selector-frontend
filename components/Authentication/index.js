import { useState } from "react";

import Login from "./components/Login";
import Registration from "./components/Registration";

export default function Authentication() {
  const [typeOpen, setTypeOpen] = useState("registration");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleRegistrationSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };
  const handleLoginSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  return typeOpen === "login" ? (
    <Login
      loading={loading}
      username={username}
      password={password}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      setTypeOpen={setTypeOpen}
      submit={handleLoginSubmit}
    />
  ) : (
    <Registration
      setTypeOpen={setTypeOpen}
      username={username}
      password={password}
      email={email}
      handleEmailChange={handleEmailChange}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      submit={handleRegistrationSubmit}
      loading={loading}
    />
  );
}
