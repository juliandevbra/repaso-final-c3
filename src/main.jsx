import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Context from './Context/Context.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './utils/ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <ErrorBoundary> */}
      <Context>
        <App />
      </Context>
    {/* </ErrorBoundary> */}
  </BrowserRouter>,
)
