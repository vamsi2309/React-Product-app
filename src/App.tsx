import QueryClientProvider from "./providers/QuerClientProvide";
import Login from "./pages/LoginPage"
import Provider from "./providers";
import Loader from "./components/Loader";
import Routes from "./routes";

function App() {

  return (
    <QueryClientProvider>
      <Provider>
        <Routes />
      </Provider>
    </QueryClientProvider>
  )
}
export default App;