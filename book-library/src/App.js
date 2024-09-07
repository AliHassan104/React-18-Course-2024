import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BooksDetail from "./components/BookDetails";
import NotFound from "./components/NotFound";
import SecretBooks from "./components/SecretBooks";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/books" element={<Navigate to="/"></Navigate>}></Route>
          <Route
            path="/books/:bookId"
            element={<BooksDetail></BooksDetail>}
          ></Route>
          <Route
            path="/secret"
            element={
              <PrivateRoute
                Component={<SecretBooks></SecretBooks>}
              ></PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
