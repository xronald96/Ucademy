import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes, Link } from 'react-router-dom';
import StudentsLayout from './layout/StudentsLayout';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
const Wrapper = styled.div``;
const queryClient = new QueryClient();

export function App() {
  return (
    <Provider store={setupStore()}>
      <QueryClientProvider client={queryClient}>
        <Wrapper>
          <Routes>
            <Route path="/" element={<StudentsLayout />} />
            <Route
              path="/page-2"
              element={
                <div>
                  <Link to="/">Click here to go back to root page.</Link>
                </div>
              }
            />
          </Routes>
          {/* END: routes */}
        </Wrapper>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
