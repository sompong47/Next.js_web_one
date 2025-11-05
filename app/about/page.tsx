export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
          เกี่ยวกับเรา
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-6xl">👥</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            ทีมงานมืออาชีพ
          </h2>
          
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            เราคือทีมนักพัฒนาที่มีความหลงใหลในการสร้างสรรค์เว็บไซต์และแอปพลิเคชันที่มีคุณภาพ 
            ด้วยประสบการณ์หลายปีในวงการเทคโนโลยี เรามุ่งมั่นที่จะมอบผลงานที่ดีที่สุดให้กับลูกค้า
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            ความพึงพอใจของคุณคือความสำเร็จของเรา เราพร้อมที่จะรับฟังและพัฒนาโซลูชันที่ตรงกับความต้องการของคุณ
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">วิสัยทัศน์</h3>
            <p className="text-gray-600">
              เป็นผู้นำด้านการพัฒนาเว็บที่ใช้เทคโนโลยีล้ำสมัยและสร้างสรรค์นวัตกรรมใหม่ๆ
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">พันธกิจ</h3>
            <p className="text-gray-600">
              มอบบริการที่มีคุณภาพและสร้างประสบการณ์ที่ดีที่สุดให้กับลูกค้าทุกคน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}