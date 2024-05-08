import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	CardsPage,
	Identificaciones,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='cards'
						element={
							<PrivateRoute>
								<CardsPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='identificaciones'
						element={
							<PrivateRoute>
								<Identificaciones />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};
