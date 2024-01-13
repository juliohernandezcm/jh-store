import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../Routes/index';
import { Navbar } from '../../Components/Navbar';
import './App.css';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<AppRoutes />
			</BrowserRouter>
		</>
	);
};

export { App };
