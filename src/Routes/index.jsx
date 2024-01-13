import { useRoutes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { MyAccount } from '../Pages/MyAccount';
import { MyOrders } from '../Pages/MyOrders';
import { MyOrder } from '../Pages/Myorder';
import { NotFound } from '../Pages/NotFound';
import { SignIn } from '../Pages/SignIn';

const AppRoutes = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/my-account', element: <MyAccount /> },
		{ path: '/my-order', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/sign-in', element: <SignIn /> },
		{ path: '*', element: <NotFound /> },
	]);

	return routes;
};

export { AppRoutes };
