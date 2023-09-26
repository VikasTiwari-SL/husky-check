import './App.css';
import { Queryparent } from './query-components/Queryparent';
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Queryparent />
      </QueryClientProvider>
    </>
  );
}

export default App;
