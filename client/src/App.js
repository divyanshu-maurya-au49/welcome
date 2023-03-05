
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Navbar1 from './components/NavBar1';
import ErrorPage from './screens/ErrorPage';
import UserAccount from './screens/UserAccount';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
function App() {
  // console.log(`/book/:${room._id}`);
  let admin=localStorage.getItem("Adminlogin")
  console.log(admin);
  return (
    <div >
      {!localStorage.getItem("login")?(
        <>
      <Navbar/>
      <Routes>
       <Route path="/registation" exact element={<Registerscreen/>}/>
      <Route path="/" exact element={<Loginscreen/>}/>
      <Route path="/adminlogin" exact element={<AdminLogin/>}/>
      <Route exact path="*" element={<ErrorPage/>}/>
      </Routes>
        </>
      ):(
        <>
      <Navbar1/>
      {admin?(
        <>
        <Routes>
       <Route exact path="/adminlogin"element ={<AdminPage/>}/>
       <Route exact path="*" element={<ErrorPage/>}/>
        </Routes>
        
        </>
      ):(
      <>
      <Routes>
       <Route exact path="/"element ={<Homescreen/>}/>
        <Route exact path="/book" element={<Bookingscreen/>}/>
        <Route exact path="/myaccount" element={<UserAccount/>}/>
        <Route exact path="*" element={<ErrorPage/>}/>
        </Routes>
      </>
      )}
      </>
      )}
      
      
      
    </div>
  );
}

export default App;
