import { Link } from 'react-router-dom';

const DashBoard = () => {
    const menus = [
        { link: '/movie_management', label: 'Movie Management' },
        { link: '/admin_management', label: 'Admin Management' },
        { link: '/user_management', label: 'User Management' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden transition-all duration-300">
                <div className="p-10 text-center">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-6 tracking-tight">Admin Dashboard</h1>
                    <p className="text-gray-600 mb-8 text-lg">Welcome back! Choose a section to manage.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {menus.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-4 px-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-lg text-center"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-10">
                        <Link
                            to="/admin/login"
                            className="inline-block text-sm text-gray-500 hover:text-blue-600 transition"
                        >
                            Go to Admin Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
