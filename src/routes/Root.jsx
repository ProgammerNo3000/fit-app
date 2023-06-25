import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { PrivateRoutes } from "./PrivateRoutes";
import {
  Landing,
  Login,
  Register,
  Workout,
  Locations,
  About,
  Excercises,
  Service,
  Mission,
  NoMatch,
  News,
} from "../pages";

export const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="/protected" element={<PrivateRoutes />}>
          <Route path="workout" element={<Workout />} />
          <Route path="locations" element={<Locations />} />
          <Route path="excercises" element={<Excercises />} />
          <Route path="service" element={<Service />} />
          <Route path="mission" element={<Mission />} />
          <Route path="news" element={<News />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
