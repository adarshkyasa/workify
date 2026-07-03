// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LandingPage from "./components/LandingPage";
import AllEmployees from "./components/AllEmployees";

export default function App() {
	return (
		<div className='flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-slate-600'>
			<Router>
				{/* Header no longer needs a state function passed to it */}
				<Header />

				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/Employees' element={<AllEmployees />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}
