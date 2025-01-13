import {BrowserRouter, Route, Routes} from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Login from "./routes/ClientHome/Login";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ClientHome/>} >
          <Route index element={<Login/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

