import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Aguacate from "./pages/Aguacate";
import Batatabit from "./pages/Batatabit";
import Calculadora from "./pages/Calculadora";
import Insure from "./pages/Insure";
import NotFound from "./pages/NotFound";
import PlatziTravel from "./pages/PlatziTravel";
import CounterClick from "./pages/CounterClick";
import GoogleClone from "./pages/GoogleClone";
import PersonalBlog from "./pages/PersonalBlog";
import BlogJavaScript from "./pages/pagesBlog/BlogJavaScript";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Main />} />
        {/* TODO: Projects */}
        <Route path="/aguacate" element={<Aguacate />} />
        <Route path="/batatabit" element={<Batatabit />} />
        <Route path="/platzi-travel" element={<PlatziTravel />} />
        <Route path="/insure" element={<Insure />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/counter-click" element={<CounterClick />} />
        <Route path="/google-clone" element={<GoogleClone />} />
        {/* TODO: Blog's pages */}
        {/* <Route path="/blog-personal" element={<PersonalBlog />} />
        <Route path="/javascript" element={<BlogJavaScript />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
