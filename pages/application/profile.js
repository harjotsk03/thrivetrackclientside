"use client";

import { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import { 
  Camera, X, Check, Edit, Building, Briefcase, Users, Mail, Calendar, 
  Clock, ChevronRight, Award, BarChart3, Lock, Bell, FileText,
  Globe, MessageCircle, Zap, CheckSquare, LucideGithub, LucideLinkedin, Download, Upload
} from "lucide-react";

export default function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [userData, setUserData] = useState({
    _id: "67fee16fc017804c20d2e834",
    email: "hsa192@sfu.ca",
    password: "$2a$10$74i.o.3Q4rWB.Yck39f3i.4thx7xmnyXECxG1BLi.23/XnjvnXKKG",
    name: "Harjot Singh",
    companyId: "67feb0b581cff72189129c80",
    role: "OWNER",
    team: "None",
    jobTitle: "None",
    createdAt: "2025-04-15T22:45:03.259+00:00",
    companyName: "Study Spotr",
    profilePhoto:
      "https://studyspotr.s3.us-east-2.amazonaws.com/defaultProfile.jpg",
    // Additional data
    skills: ["React", "Next.js", "MongoDB", "UX Design"],
    languages: ["English", "Punjabi"],
    socialLinks: {
      linkedin: "linkedin.com/in/harjotsingh",
      github: "github.com/harjotsingh",
    },
  });

  // Mock data for additional sections
  const activityTimeline = [
    {
      date: "Apr 22, 2025",
      action: "Updated profile information",
      time: "10:30 AM",
    },
    {
      date: "Apr 20, 2025",
      action: "Logged in from new device",
      time: "8:15 PM",
    },
    { date: "Apr 18, 2025", action: "Changed password", time: "3:45 PM" },
    { date: "Apr 15, 2025", action: "Account created", time: "10:45 AM" },
  ];

  const stats = [
    {
      label: "Projects",
      value: 5,
      icon: <Briefcase size={20} className="text-blue-500" />,
    },
    {
      label: "Tasks Completed",
      value: 27,
      icon: <CheckSquare size={20} className="text-green-500" />,
    },
    {
      label: "Team Members",
      value: 8,
      icon: <Users size={20} className="text-purple-500" />,
    },
    {
      label: "Documents",
      value: 12,
      icon: <FileText size={20} className="text-amber-500" />,
    },
  ];

  const upcomingEvents = [
    { title: "Team Meeting", date: "Apr 23, 2025", time: "10:00 AM" },
    { title: "Project Deadline", date: "Apr 27, 2025", time: "11:59 PM" },
    { title: "Quarterly Review", date: "May 01, 2025", time: "2:00 PM" },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleInputChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  const handleSkillsChange = (e) => {
    setUserData({
      ...userData,
      skills: e.target.value.split(",").map((skill) => skill.trim()),
    });
  };

  const handleSave = () => {
    // Here you would typically send the data to your API
    console.log("Saving user data:", userData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original data (would be fetched from API in real app)
    setUserData({
      _id: "67fee16fc017804c20d2e834",
      email: "hsa192@sfu.ca",
      password: "$2a$10$74i.o.3Q4rWB.Yck39f3i.4thx7xmnyXECxG1BLi.23/XnjvnXKKG",
      name: "Harjot Singh",
      companyId: "67feb0b581cff72189129c80",
      role: "OWNER",
      team: "None",
      jobTitle: "None",
      createdAt: "2025-04-15T22:45:03.259+00:00",
      companyName: "Study Spotr",
      profilePhoto:
        "https://studyspotr.s3.us-east-2.amazonaws.com/defaultProfile.jpg",
      skills: ["React", "Next.js", "MongoDB", "UX Design"],
      languages: ["English", "Punjabi"],
      socialLinks: {
        linkedin: "linkedin.com/in/harjotsingh",
        github: "github.com/harjotsingh",
      },
    });
    setIsEditing(false);
  };

  return (
    <AuthLayout>
      <div className="w-full min-h-screen flex flex-col overflow-hidden mt-24 pb-16">
        <div className="max-w-6xl mx-auto w-full px-4">
          {/* Header with edit toggle */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Profile Dashboard
            </h1>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Check size={16} />
                    <span>Save</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200"
                >
                  <Edit size={16} />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("activity")}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "activity"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Activity
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "settings"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Settings
              </button>
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column - Personal Information */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      <img
                        src={userData.profilePhoto}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
                      />
                      {isEditing && (
                        <div className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white cursor-pointer shadow-md">
                          <Camera size={16} />
                        </div>
                      )}
                    </div>

                    {isEditing ? (
                      <input
                        type="text"
                        value={userData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="text-xl font-bold text-center w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 px-2 py-1"
                      />
                    ) : (
                      <h2 className="text-xl font-bold">{userData.name}</h2>
                    )}

                    <div className="mt-1 text-sm text-gray-500">
                      {isEditing ? (
                        <select
                          value={userData.role}
                          onChange={(e) =>
                            handleInputChange("role", e.target.value)
                          }
                          className="border-b border-gray-300 focus:border-blue-500 focus:ring-0 px-2 py-1 text-center"
                        >
                          <option value="OWNER">OWNER</option>
                          <option value="ADMIN">ADMIN</option>
                          <option value="USER">USER</option>
                        </select>
                      ) : (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {userData.role}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        EMAIL
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={userData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Mail size={16} className="text-gray-500" />
                          <p>{userData.email}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        MEMBER SINCE
                      </label>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar size={16} className="text-gray-500" />
                        <p>{formatDate(userData.createdAt)}</p>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="pt-2">
                      <label className="block text-xs font-medium text-gray-500 mb-2">
                        SOCIAL PROFILES
                      </label>
                      {isEditing ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <LucideLinkedin
                              size={16}
                              className="text-gray-500"
                            />
                            <input
                              type="text"
                              value={userData.socialLinks.linkedin}
                              onChange={(e) =>
                                handleInputChange("socialLinks", {
                                  ...userData.socialLinks,
                                  linkedin: e.target.value,
                                })
                              }
                              className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                              placeholder="LinkedIn URL"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <LucideGithub size={16} className="text-gray-500" />
                            <input
                              type="text"
                              value={userData.socialLinks.github}
                              onChange={(e) =>
                                handleInputChange("socialLinks", {
                                  ...userData.socialLinks,
                                  github: e.target.value,
                                })
                              }
                              className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                              placeholder="GitHub URL"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex space-x-2">
                          <a
                            href="#"
                            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                          >
                            <LucideLinkedin
                              size={16}
                              className="text-gray-700"
                            />
                          </a>
                          <a
                            href="#"
                            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                          >
                            <LucideGithub size={16} className="text-gray-700" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle/Right Column - Expanded Information */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                    Company Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        COMPANY NAME
                      </label>
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <Building size={16} className="text-gray-500" />
                          <input
                            type="text"
                            value={userData.companyName}
                            onChange={(e) =>
                              handleInputChange("companyName", e.target.value)
                            }
                            className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Building size={16} className="text-gray-500" />
                          <p>{userData.companyName}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        COMPANY ID
                      </label>
                      <p className="text-gray-700">{userData.companyId}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                    Position Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        JOB TITLE
                      </label>
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-gray-500" />
                          <input
                            type="text"
                            value={userData.jobTitle}
                            onChange={(e) =>
                              handleInputChange("jobTitle", e.target.value)
                            }
                            className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Enter job title"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Briefcase size={16} className="text-gray-500" />
                          <p>
                            {userData.jobTitle === "None"
                              ? "Not specified"
                              : userData.jobTitle}
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        TEAM
                      </label>
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-gray-500" />
                          <input
                            type="text"
                            value={userData.team}
                            onChange={(e) =>
                              handleInputChange("team", e.target.value)
                            }
                            className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Enter team name"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Users size={16} className="text-gray-500" />
                          <p>
                            {userData.team === "None"
                              ? "Not specified"
                              : userData.team}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-left">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-md">
                          <Lock size={16} className="text-blue-600" />
                        </div>
                        <span className="text-sm font-medium">
                          Change Password
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>

                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-left">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-md">
                          <Bell size={16} className="text-purple-600" />
                        </div>
                        <span className="text-sm font-medium">
                          Notification Settings
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>

                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-left">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-md">
                          <FileText size={16} className="text-green-600" />
                        </div>
                        <span className="text-sm font-medium">
                          Export Profile Data
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-6 text-gray-800">
                Activity Timeline
              </h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                {/* Timeline events */}
                <div className="space-y-6">
                  {activityTimeline.map((activity, index) => (
                    <div key={index} className="relative pl-10">
                      {/* Timeline dot */}
                      <div className="absolute left-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border-2 border-white">
                        <Clock size={16} className="text-blue-600" />
                      </div>

                      {/* Event content */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium text-gray-800">
                            {activity.action}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {activity.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Account Settings
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Notifications
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="emailNotifications"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label
                        htmlFor="emailNotifications"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Receive email notifications
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Two-Factor Authentication
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="twoFactorAuth"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="twoFactorAuth"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Enable two-factor authentication
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Theme
                    </label>
                    <select
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      defaultValue="system"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="system">System Default</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Language
                    </label>
                    <select
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      defaultValue="en"
                    >
                      <option value="en">English</option>
                      <option value="pa">Punjabi</option>
                      <option value="fr">French</option>
                      <option value="es">Spanish</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Privacy Settings
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Profile Visibility
                    </label>
                    <select
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      defaultValue="team"
                    >
                      <option value="public">Public</option>
                      <option value="team">Team Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Show Online Status
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="onlineStatus"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label
                        htmlFor="onlineStatus"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Show when you're online
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Activity Visibility
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="activityVisibility"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label
                        htmlFor="activityVisibility"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Show your activity to team members
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2">
                      <Zap size={16} />
                      Request Data Deletion
                    </button>
                  </div>
                </div>
              </div>

              {/* Team Settings */}
              <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Team Members
                </h3>

                <div className="space-y-3">
                  {/* Mock team members */}
                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-medium">
                        JS
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          John Smith
                        </h4>
                        <p className="text-xs text-gray-500">Design Lead</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Online
                      </span>
                      <button className="text-blue-500 hover:text-blue-700">
                        <MessageCircle size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-medium">
                        AP
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Alice Parker
                        </h4>
                        <p className="text-xs text-gray-500">Developer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Away
                      </span>
                      <button className="text-blue-500 hover:text-blue-700">
                        <MessageCircle size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                        MJ
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Mike Johnson
                        </h4>
                        <p className="text-xs text-gray-500">Marketing</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Online
                      </span>
                      <button className="text-blue-500 hover:text-blue-700">
                        <MessageCircle size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                    <Users size={16} />
                    View All Team Members
                  </button>
                </div>
              </div>

              {/* Document Repository */}
              <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Document Repository
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-md">
                        <FileText size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Resume - Harjot Singh.pdf
                        </h4>
                        <p className="text-xs text-gray-500">
                          Uploaded on Apr 15, 2025
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-500 hover:text-gray-700">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-md">
                        <FileText size={16} className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Conference Certificate.pdf
                        </h4>
                        <p className="text-xs text-gray-500">
                          Uploaded on Apr 10, 2025
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-500 hover:text-gray-700">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="px-4 py-2 border border-dashed border-gray-300 rounded-lg w-full text-gray-500 flex items-center justify-center gap-2 hover:bg-gray-50">
                    <Upload size={16} />
                    Upload New Document
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}