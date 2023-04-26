import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import UserList from './Users/UserList';
import ProductList from './Products/ProductList';
import Login from './Login';
import UserListFunctional from './Users/UserListFunctional';

function AppRoutes() {
    return (<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<UserListFunctional />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="*" element={<NotFound />} />
    </Routes>);
}

export default AppRoutes;