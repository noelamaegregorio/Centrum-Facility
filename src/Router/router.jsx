import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import NotFound from '../NotFound.jsx';

import HomePage from '../Pages/HomePage/HomePage.jsx';
import ContactUs from '../Pages/ContactUsPage/ContactUs.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App /> ,
        errorElement: <NotFound />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'contact-us', element: <ContactUs /> },
        ],
    }
]);

export default router;