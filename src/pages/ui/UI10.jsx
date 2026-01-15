import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UI10Layout from '../../components/ui10/UI10Layout';
import UI10Home from '../../pages/ui10/UI10Home';
import UI10Properties from '../../pages/ui10/UI10Properties';
import UI10PropertyDetails from '../../pages/ui10/UI10PropertyDetails';
import UI10Agents from '../../pages/ui10/UI10Agents';
import UI10About from '../../pages/ui10/UI10About';
import UI10Contact from '../../pages/ui10/UI10Contact';

const UI10 = () => {
    return (
        <UI10Layout>
            <Routes>
                <Route index element={<UI10Home />} />
                <Route path="properties" element={<UI10Properties />} />
                <Route path="properties/:id" element={<UI10PropertyDetails />} />
                <Route path="agents" element={<UI10Agents />} />
                <Route path="about" element={<UI10About />} />
                <Route path="contact" element={<UI10Contact />} />
            </Routes>
        </UI10Layout>
    );
};

export default UI10;
