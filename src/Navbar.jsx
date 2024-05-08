import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};
	
	const onCardsClick = () => {
		navigate('/cards', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };
	const onIdentificacionesClick = () => {
		navigate('/cards', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };
	  const onDashboard = () => {
		navigate('/dashboard', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };

	return (
		<>
			<header>
				<h1>
					<Link to='/'><img src="logo.png" width="50" /></Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
						<button className='btn-carding' onClick={onCardsClick}>
							Cards
						</button>
						<button className='btn-carding' onClick={onIdentificacionesClick}>
							Identificaciones
						</button>
						<button className='btn-logout' onClick={onDashboard}>
							Dashboard
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};
