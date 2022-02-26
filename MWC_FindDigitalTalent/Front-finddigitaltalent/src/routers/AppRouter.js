import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/Ui/Navbar';
import { Footer } from '../components/Ui/Footer';
import { MainArea } from '../components/Participants/MainArea';
import { Welcome } from '../components/Welcome';
import { Form } from '../components/Form';
import { Form2 } from '../components/Form2';
import { Feedback } from '../components/Feedback';
import { UserDetail } from '../components/UserDetail';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <div className = "cover" >
            <div className="container d-flex align-items-center justify-content-center heightDiv flex-wrap gap-4 pt-2">
                <Routes>
                    <Route path="Inicio" element={<Welcome />} />
                    <Route path="Registro" element={<Form />} />
                    <Route path="Registro2" element={<Form2 />} />
                    <Route path="Feedback" element={<Feedback />} />
                    <Route path="Participantes" element={<MainArea />} />
                    <Route path="Participante/:Id" element={<UserDetail />} />

                    <Route path="/" element={<Welcome />} />
                </Routes>
            </div>
            </div>

            <Footer />
        </>
    )
}