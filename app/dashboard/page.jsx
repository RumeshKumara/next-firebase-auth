"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Dashboard
              </h1>
              <p className="text-gray-600">Welcome back to your account</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-linear-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">
                Account Information
              </h2>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <span className="bg-white/20 px-3 py-1 rounded">
                    {user.email}
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">User ID:</span>
                  <span className="bg-white/20 px-3 py-1 rounded text-sm">
                    {user.uid}
                  </span>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Analytics
                </h3>
                <p className="text-gray-600">
                  View your activity and statistics
                </p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  View Details →
                </button>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Settings
                </h3>
                <p className="text-gray-600">Manage your account preferences</p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  Manage Settings →
                </button>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <div className="text-3xl mb-3">🔔</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Notifications
                </h3>
                <p className="text-gray-600">Check your latest updates</p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  View All →
                </button>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <div className="text-3xl mb-3">👤</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Profile
                </h3>
                <p className="text-gray-600">Update your profile information</p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  Edit Profile →
                </button>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                ✓ Account Active
              </h3>
              <p className="text-green-700">
                Your account is in good standing and fully functional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
