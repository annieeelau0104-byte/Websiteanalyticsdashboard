import { createBrowserRouter } from "react-router";
import { Dashboard } from "./components/Dashboard";
import { Overview } from "./components/Overview";
import { TrafficAnalytics } from "./components/TrafficAnalytics";
import { UserBehavior } from "./components/UserBehavior";
import { RealTimeStats } from "./components/RealTimeStats";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      { index: true, Component: Overview },
    ],
  },
  {
    path: "/traffic",
    Component: Dashboard,
    children: [
      { index: true, Component: TrafficAnalytics },
    ],
  },
  {
    path: "/behavior",
    Component: Dashboard,
    children: [
      { index: true, Component: UserBehavior },
    ],
  },
  {
    path: "/realtime",
    Component: Dashboard,
    children: [
      { index: true, Component: RealTimeStats },
    ],
  },
]);