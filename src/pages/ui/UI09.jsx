import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UI09Layout from '../../components/ui09/UI09Layout';
import UI09Home from '../../pages/ui09/UI09Home';
import UI09About from '../../pages/ui09/UI09About';
import UI09Tours from '../../pages/ui09/UI09Tours';
import UI09TourDetails from '../../pages/ui09/UI09TourDetails';
import UI09Gallery from '../../pages/ui09/UI09Gallery';
import UI09Contact from '../../pages/ui09/UI09Contact';

const UI09 = () => {
    return (
        <Routes>
            <Route path="/" element={<UI09Layout />}>
                <Route index element={<UI09Home />} />
                <Route path="about" element={<UI09About />} />
                <Route path="tours" element={<UI09Tours />} />
                <Route path="tours/:id" element={<UI09TourDetails />} />
                <Route path="gallery" element={<UI09Gallery />} />
                <Route path="contact" element={<UI09Contact />} />
            </Route>
        </Routes>
    );
};

export default UI09;
