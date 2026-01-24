import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const isAdmin = sessionStorage.getItem('isAdmin');
        if (!isAdmin) {
            navigate('/admin');
            return;
        }

        const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        setOrders(storedOrders);
    }, [navigate]);

    const updateStatus = (orderId, newStatus) => {
        const updatedOrders = orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        );
        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Processed': return 'bg-blue-100 text-blue-800';
            case 'Shipped': return 'bg-purple-100 text-purple-800';
            case 'Delivered': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const StatusIcon = ({ status }) => {
        switch (status) {
            case 'Pending': return <Clock size={16} />;
            case 'Processed': return <Package size={16} />;
            case 'Shipped': return <Truck size={16} />;
            case 'Delivered': return <CheckCircle size={16} />;
            default: return <Clock size={16} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={() => {
                            sessionStorage.removeItem('isAdmin');
                            navigate('/admin');
                        }}
                        className="text-red-600 hover:text-red-800 font-medium"
                    >
                        Logout
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-400">
                        <h3 className="text-gray-500 text-sm uppercase">Pending Orders</h3>
                        <p className="text-2xl font-bold">{orders.filter(o => o.status === 'Pending').length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-400">
                        <h3 className="text-gray-500 text-sm uppercase">Processing</h3>
                        <p className="text-2xl font-bold">{orders.filter(o => o.status === 'Processed').length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-400">
                        <h3 className="text-gray-500 text-sm uppercase">Total Revenue</h3>
                        <p className="text-2xl font-bold">₹{orders.reduce((sum, o) => sum + parseInt(o.total || 0), 0).toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gray-400">
                        <h3 className="text-gray-500 text-sm uppercase">Total Orders</h3>
                        <p className="text-2xl font-bold">{orders.length}</p>
                    </div>
                </div>

                {/* Orders Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-6 border-b">
                        <h2 className="text-xl font-semibold">Recent Orders</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
                                <tr>
                                    <th className="p-4">Order ID</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Customer</th>
                                    <th className="p-4">Items</th>
                                    <th className="p-4">Total</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {orders.length === 0 ? (
                                    <tr>
                                        <td colSpan="7" className="p-8 text-center text-gray-500">No orders found.</td>
                                    </tr>
                                ) : (
                                    orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50">
                                            <td className="p-4 font-mono text-sm">{order.id}</td>
                                            <td className="p-4 text-sm">{order.date}</td>
                                            <td className="p-4">
                                                <div className="font-medium">{order.customer.name}</div>
                                                <div className="text-xs text-gray-500">{order.customer.email}</div>
                                                <div className="text-xs text-gray-500">{order.customer.city}</div>
                                            </td>
                                            <td className="p-4 text-sm max-w-xs">
                                                {order.items.map((item, i) => (
                                                    <div key={i} className="truncate">
                                                        {item.name} {item.selectedSize ? `(${item.selectedSize})` : ''}
                                                    </div>
                                                ))}
                                                {order.items.length > 2 && <div className="text-xs text-gray-400">+{order.items.length - 2} more</div>}
                                            </td>
                                            <td className="p-4 font-medium">₹{order.total.toLocaleString()}</td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                                    <StatusIcon status={order.status} /> {order.status}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <select
                                                    value={order.status}
                                                    onChange={(e) => updateStatus(order.id, e.target.value)}
                                                    className="border rounded px-2 py-1 text-sm bg-white cursor-pointer hover:border-gray-400"
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Processed">Processed</option>
                                                    <option value="Shipped">Shipped</option>
                                                    <option value="Delivered">Delivered</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
