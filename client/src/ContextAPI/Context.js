import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext({
  room: [],
  setRoom: () => {},
});

export const DataState = ({ children }) => {
  const [room, setRoom] = useState({});
  return (
    <DataContext.Provider value={{ room, setRoom }}>
      {children}
    </DataContext.Provider>
  );
};

export const UserContext = createContext({
  user: [],
  setUser: () => {},
});
export const UserState = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

