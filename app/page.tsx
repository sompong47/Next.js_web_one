export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            ยินดีต้อนรับสู่เว็บไซต์ของเรา
          </h1>
          <p className="text-xl text-gray-600">
            สร้างสรรค์สิ่งดีๆ ไปด้วยกัน
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">รวดเร็ว</h3>
            <p className="text-gray-600">
              ประสิทธิภาพสูงและโหลดเร็วด้วยเทคโนโลยีล่าสุด
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">💎</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">สวยงาม</h3>
            <p className="text-gray-600">
              ดีไซน์ที่ทันสมัยและใช้งานง่าย
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">แม่นยำ</h3>
            <p className="text-gray-600">
              ตรงตามความต้องการของคุณ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}