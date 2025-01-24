import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "https://dssberkeley.org";
  }, []);

  return null; // The app renders nothing as it redirects immediately
}

export default App;

