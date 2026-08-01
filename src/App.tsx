

import ErrorBoundary from './components/ErrorBoundary';
import Application from './routes';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <ErrorBoundary>
      <>
        <Application />
        <ToastContainer position="top-right" autoClose={3000} />

      </>
    </ErrorBoundary>
  );
}

export default App;