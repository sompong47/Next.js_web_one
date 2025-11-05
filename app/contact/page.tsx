'use client';
import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });

  const handleSubmit = () => {
    alert('ข้อความถูกส่งแล้ว! ขอบคุณที่ติดต่อเรา');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
          ติดต่อเรา
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">ส่งข้อความถึงเรา</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">ชื่อ</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="กรอกชื่อของคุณ"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">อีเมล</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">ข้อความ</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="เขียนข้อความของคุณที่นี่..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                ส่งข้อความ
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ข้อมูลติดต่อ</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">อีเมล</p>
                    <p className="text-gray-600">contact@mywebsite.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">โทรศัพท์</p>
                    <p className="text-gray-600">02-XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">ที่อยู่</p>
                    <p className="text-gray-600">กรุงเทพมหานคร ประเทศไทย</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">เวลาทำการ</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>จันทร์ - ศุกร์</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>เสาร์ - อาทิตย์</span>
                  <span>ปิดทำการ</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}