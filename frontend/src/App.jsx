import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateProgram from "./pages/Admin/CreateProgram";
import ManagePrograms from "./pages/Admin/ManagePrograms";
import ManageUsers from "./pages/Admin/ManageUsers";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import MyPrograms from "./pages/User/MyPrograms";
import UserDashboard from "./pages/User/UserDashboard";
import ViewProgramDetails from "./pages/User/ViewProgramDetails";
import PrivateRoute from "./routes/PrivateRoute";
import { Home } from "./pages/Home";
import { UserProvider } from './context/UserProvider';

const App = () => {
	return (
		<UserProvider>
			<div>
				<Router>
					<Routes>
						{/* Default Route */}
						<Route path="/" element={<Home />} />

						{/* Auth Routes */}
						<Route path="/login" element={<Login />}></Route>
						<Route path="/signUp" element={<SignUp />}></Route>

						{/* Admin Routes */}
						<Route element={<PrivateRoute allowedRoles={["admin"]} />}>
							<Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
							<Route path="/admin/programs" element={<ManagePrograms />} />
							<Route path="/admin/create-program" element={<CreateProgram />} />
							<Route path="/admin/users" element={<ManageUsers />} />
						</Route>

						{/* User Routes */}
						<Route element={<PrivateRoute allowedRoles={["admin"]} />}>
							<Route path="/user/dashboard" element={<UserDashboard />}></Route>
							<Route path="/user/programs" element={<MyPrograms />}></Route>
							<Route path="/user/program-details/:id" element={<ViewProgramDetails />}></Route>
						</Route>
					</Routes>
				</Router>
			</div>
		</UserProvider>
	);
};

export default App;