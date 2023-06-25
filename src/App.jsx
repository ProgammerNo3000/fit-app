import { AuthProvider } from "./context/AuthContext";
import { Root } from "./routes/Root";

function App() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
}

export default App;
