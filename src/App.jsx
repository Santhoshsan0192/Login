import SignupForm from './Signup.jsx'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import LoginPage from './LoginPage';  
import Home from './Home';
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginPage />} />   
  
    </Routes>
    </>
  )
}

export default App
