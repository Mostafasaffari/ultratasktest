import { CssBaseline } from "@material-ui/core";

import User from "./pages/user";
import Layout from "./theme/layout";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Layout>
        <User />
      </Layout>
    </div>
  );
}

export default App;
