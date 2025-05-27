import { Layout } from "./components/layout/Layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
