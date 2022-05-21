import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Diary from '../pages/Diary';
import Counselor from '../pages/Counselor';
import Chatbot from '../components/Chatbot';
import Chatroom from '../pages/Chatroom';
import Footer from '../components/Footer';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/counselor" element={<Counselor />} />
                <Route path="/chatroom" element={<Chatroom />} />
            </Routes>
            <Chatbot />
            <Footer />
        </BrowserRouter>
    );
}

export default Main;
