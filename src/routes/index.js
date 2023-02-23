import Home from "~/Page/Home";
import Watch from "~/Page/Watch";

const publicRoute = [
  { path: "/", component: Home },
  { path: "/watch", component: Watch },
];

const privateRoute = [];

export { privateRoute, publicRoute };
