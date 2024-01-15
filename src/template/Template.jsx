import Topnav from '../Pages/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../Routes/routes';
import MarkdownViewer from '../Components/markdownviewer/MarkdownViewer';

export default function Templates() {
    return (
        <>
            <Router>
                <Topnav />
                <div className="container mt-4">
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.component} />
                        ))}
                    </Routes>
                </div>

            </Router>
        </>
    )
}
