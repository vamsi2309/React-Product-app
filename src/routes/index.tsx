import { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useSelector, RootState } from "../store";
import Layout from "../components/Layout";

const Loadable =
  <P extends object>(Component: React.ComponentType<P>) =>
    (props: P) => {
      return (
        <Suspense fallback={<Loader />}>
          <Component {...props} />
        </Suspense>
      );
    };

const Login = Loadable(lazy(() => import("../pages/LoginPage")));
const Home = Loadable(lazy(() => import("../pages/HomePage")));
const ProductDetails = Loadable(lazy(() => import("../pages/productDetails")));
const Cart = Loadable(lazy(() => import("../pages/cartPage")))
const Search = Loadable(lazy(() => import("../pages/Search")))
const UserMange = Loadable(lazy(() => import("../pages/useManagement")))

function Routes() {
  const isLogin = useSelector((state: RootState) => state.userLogin.isLogin);


  // if (!isLogin) {
  //   return <Login />;
  // }
  return useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/products/:id",
      element: (
        <Layout>
          <ProductDetails />
        </Layout>
      ),
    },
    {
      path: "/cart",
      element: (
        <Layout>
          <Cart />
        </Layout>
      ),

    },
    {
      path: "/search",
      element: (
        <Layout>
          <Search />
        </Layout>
      ),

    },
    {
      path: "/search/products/:id",
      element: (
        <Layout>
          <ProductDetails />
        </Layout>
      ),

    },
    {
      path: "/user-management",
      element: (
        <Layout>
          <UserMange />
        </Layout>
      ),

    },

    { path: "*", element: <h1>404</h1> },
  ]);
}

export default Routes;
