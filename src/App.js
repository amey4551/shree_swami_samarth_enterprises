import React, { Suspense } from "react";
import Layout from "./components/Layout/index";
import {
  Route, Routes,
} from "react-router-dom";

// Import Css
import "./assets/css/materialdesignicons.min.css"
import "./Apps.scss";

// import "./assets/css/colors/default.css";

// Include Routes
import routes from "./routes/allRoutes";
import withRouter from "./common/data/withRouter";

const App = () => {
  const LoaderComponent = () => (
    <div id="">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          {routes.map((route, idx) =>
            route.isWithoutLayout ? (
              <Route
                path={route.path}
                element={route.component}
                key={idx} />
            ) : (
              <Route
                path={route.path}
                element={
                  <Layout hasDarkTopBar={route.isTopbarDark}>
                    {route.component}
                  </Layout>
                  // withLayout(route.component, route.isTopbarDark)
                }
                key={idx}
              />
            )
          )}
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default withRouter(App);
