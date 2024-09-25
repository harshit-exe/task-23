import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';

export default function InternshipListing() {
  const [filters, setFilters] = useState({
    profile: '',
    location: '',
    workFromHome: false,
    partTime: false,
    minStipend: 0,
  });
// DataBase  
  const [internships, setInternships] = useState([
    {
      title: 'Sales',
      company: 'Flying Pigeon Solutions',
      location: 'Jaipur',
      duration: '2 Months',
      stipend: '₹ 8,000-10,000 /month',
      postedAgo: '1 week ago',
      type: 'Internship with job offer',
    },
    {
      title: 'Social Entrepreneurship',
      company: 'Hamari Pahchan NGO',
      location: 'Work from home',
      duration: '1 Month',
      stipend: 'Unpaid',
      postedAgo: 'Just now',
      type: 'Internship with job offer • Part time',
    },
    {
      title: 'Web Dev',
      company: 'Google',
      location: 'Work from home',
      duration: '2 Month',
      stipend: '₹ 80,000-10,0000 /month',
      postedAgo: 'Just now',
      type: 'Internship with job offer • Part time',
    },
    {
      title: 'Web Dev',
      company: 'Google',
      location: 'Work from home',
      duration: '2 Month',
      stipend: '₹ 80,000-10,0000 /month',
      postedAgo: 'Just now',
      type: 'Internship with job offer • Part time',
    },
    {
      title: 'Web Dev',
      company: 'Google',
      location: 'Work from home',
      duration: '2 Month',
      stipend: '₹ 80,000-10,0000 /month',
      postedAgo: 'Just now',
      type: 'Internship with job offer • Part time',
    },
    {
      title: 'Web Dev',
      company: 'Google',
      location: 'Work from home',
      duration: '2 Month',
      stipend: '₹ 80,000-10,0000 /month',
      postedAgo: 'Just now',
      type: 'Internship with job offer • Part time',
    },
    {
      title: 'Web Dev',
      company: 'Google',
      location: 'Work from home',
      duration: '2 Month',
      stipend: '₹ 80,000-10,0000 /month',
      postedAgo: 'Just now',
      type: 'Internship with job offer • Part time',
    },
  ]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const filteredInternships = internships.filter(internship => {
    return (
      internship.title.toLowerCase().includes(filters.profile.toLowerCase()) &&
      internship.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (!filters.workFromHome || internship.location === 'Work from home') &&
      (!filters.partTime || internship.type.includes('Part time')) &&
      (filters.minStipend === 0 || (internship.stipend !== 'Unpaid' && 
        parseInt(internship.stipend.replace(/[^0-9]/g, '')) >= filters.minStipend))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-zinc-200">
      {/* <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Internships</li>
        </ul>
      </div> */}

      <h1 className="text-3xl font-semibold mb-2 text-center">9591 Total Internships</h1>
      <p className="text-gray-600 mb-6 text-center">Latest Summer Internships in India</p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="profile" className="block text-sm font-medium text-gray-700 mb-1">Profile</label>
                <input 
                  type="text" 
                  id="profile" 
                  name="profile"
                  placeholder="e.g. Marketing" 
                  className="w-full px-3 py-2 border rounded-md"
                  value={filters.profile}
                  onChange={handleFilterChange}
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location"
                  placeholder="e.g. Delhi" 
                  className="w-full px-3 py-2 border rounded-md"
                  value={filters.location}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="work-from-home" 
                  name="workFromHome"
                  className="mr-2"
                  checked={filters.workFromHome}
                  onChange={handleFilterChange}
                />
                <label htmlFor="work-from-home" className="text-sm">Work from home</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="part-time" 
                  name="partTime"
                  className="mr-2"
                  checked={filters.partTime}
                  onChange={handleFilterChange}
                />
                <label htmlFor="part-time" className="text-sm">Part-time</label>
              </div>
              <div>
                <label htmlFor="stipend" className="block text-sm font-medium text-gray-700 mb-1">
                  Desired minimum monthly stipend (₹): {filters.minStipend}
                </label>
                <input
                  type="range"
                  id="stipend"
                  name="minStipend"
                  min="0"
                  max="10000"
                  step="1000"
                  value={filters.minStipend}
                  onChange={handleFilterChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-600">
                  <span>0</span>
                  <span>2k</span>
                  <span>4k</span>
                  <span>6k</span>
                  <span>8k</span>
                  <span>10k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 overflow-auto">
          {filteredInternships.map((internship, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold">{internship.title}</h2>
                  <p className="text-sm text-gray-600">{internship.company}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Actively hiring</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin size={16} className="mr-2" />
                <span>{internship.location}</span>
                <Clock size={16} className="ml-4 mr-2" />
                <span>{internship.duration}</span>
                <DollarSign size={16} className="ml-4 mr-2" />
                <span>{internship.stipend}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{internship.postedAgo} • {internship.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}