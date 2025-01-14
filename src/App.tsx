import {BrowserRouter, Route, Routes} from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Login from "./routes/ClientHome/Login";
import Bank from "./routes/ClientHome/Bank";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ClientHome/>} >
          <Route index element={<Login/>} />
          <Route path="login" element={<Login/>} />
          <Route path="bank" element={<Bank/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

