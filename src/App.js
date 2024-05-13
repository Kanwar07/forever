import "./App.css";
import Attending from "./components/attending/Attending";
import CountDown from "./components/countdown/CountDown";
import Introduction from "./components/introduction/Introduction";
import Profile1Introduction from "./components/introduction/Profile1Introduction";
import Profile2Introduction from "./components/introduction/Profile2Introduction";
import Slideshow from "./components/slideshow/Slideshow";
import ThankYou from "./components/thankyou/ThankYou";
import Wedding from "./components/wedding/Wedding";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={
            <>
              <Slideshow />
              <Introduction />
              <CountDown />
              <Wedding />
              <Attending />
              <ThankYou />
            </>
          }
        />
        <Route path="/him" element={<Profile1Introduction />} />
        <Route path="/her" element={<Profile2Introduction />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
