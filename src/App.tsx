// import Home from "./components/Home";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/Home"));
function App() {
  return (
    <>
      <Suspense
        fallback={
          <section
            id="loaderContainer"
            className="w-screen h-screen flex items-center justify-center"
          >
            <div className="loader"></div>
          </section>
        }
      >
        <Home />
      </Suspense>
    </>
  );
}
export default App;
