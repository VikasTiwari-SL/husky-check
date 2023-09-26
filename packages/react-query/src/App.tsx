import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';

import { Queryparent } from './query-components/Queryparent';

const queryClient = new QueryClient();
export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Queryparent />
      </QueryClientProvider>
    </>
  );
}
