import{ BrowserRouter,Routes,Route} from "react-router-dom";
import Page1 from'./Home'
import Page2 from'./Login'
import Page3 from'./Registration'
import Page4 from'./Page'
export default function Navigation() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page1/>}></Route>
            <Route path="/login" element={<Page2/>}></Route>
            <Route path="/Registration" element={<Page3/>}></Route>
            <Route path="/newpage" element={<Page4/>}></Route>
            
        </Routes>
        </BrowserRouter>

    )
}