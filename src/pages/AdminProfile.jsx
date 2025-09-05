// AdminProfile.jsx
import React from "react";

export default function AdminProfile() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-green-900 mb-4">
        Profil Admin
      </h2>
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-green-200"
        />
        <div>
          <h3 className="text-lg font-medium text-green-900">
            Admin Harimau
          </h3>
          <p className="text-gray-600">admin@monitoringharimau.go.id</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-3 border rounded-lg">
          <p className="text-gray-600">Username</p>
          <p className="font-medium">admin_harimau</p>
        </div>
        <div className="p-3 border rounded-lg">
          <p className="text-gray-600">Role</p>
          <p className="font-medium">Administrator</p>
        </div>
        <div className="p-3 border rounded-lg">
          <p className="text-gray-600">No. Telepon</p>
          <p className="font-medium">+62 812 3456 7890</p>
        </div>
      </div>
    </div>
  );
}
