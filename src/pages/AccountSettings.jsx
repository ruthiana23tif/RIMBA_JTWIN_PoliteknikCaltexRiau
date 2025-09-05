import React, { useState } from "react";
import { Camera, X } from "lucide-react";

export default function AccountSettings() {
  const [profilePic, setProfilePic] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const removePic = () => {
    setProfilePic(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Account Settings</h1>

      {/* Basic Info */}
      <section>
        <h2 className="font-semibold text-lg mb-4">Basic info</h2>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <Camera className="text-gray-500" />
              </div>
            )}
          </div>
          <div>
            <label className="cursor-pointer text-sm text-blue-600 font-medium">
              Upload new picture
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUpload}
              />
            </label>
            {profilePic && (
              <button
                onClick={removePic}
                className="block text-sm text-red-600 mt-1"
              >
                Remove
              </button>
            )}
          </div>
        </div>

        <div className="divide-y border rounded-xl">
          <InfoRow label="Name" value="Wade Armstrong" />
          <InfoRow label="Date of Birth" value="December 24, 1991" />
          <InfoRow label="Gender" value="Male" />
          <InfoRow label="Email" value="wade.armstrong@email.com" />
        </div>
      </section>

      {/* Account Info */}
      <section>
        <h2 className="font-semibold text-lg mb-4">Account info</h2>
        <div className="divide-y border rounded-xl">
          <InfoRow label="Username" value="wadearmstrong08" />
          <InfoRow label="Password" value="********" />
        </div>
      </section>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
      <span className="text-gray-400">&gt;</span>
    </div>
  );
}
