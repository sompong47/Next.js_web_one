'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Mail, Image } from 'lucide-react'; // เพิ่ม Image
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <html lang="th">
      <body>
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">W</span>
                </div>
                <span className="text-white font-bold text-xl">MyWebsite</span>
              </div>
              
              <div className="flex space-x-1">
                <Link
                  href="/"
                  className={`px-6 py-2 rounded-lg flex items-center space-x-2 transition-all ${
                    pathname === '/'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Home size={20} />
                  <span className="font-medium">หน้าแรก</span>
                </Link>
                
                <Link
                  href="/about"
                  className={`px-6 py-2 rounded-lg flex items-center space-x-2 transition-all ${
                    pathname === '/about'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Users size={20} />
                  <span className="font-medium">เกี่ยวกับ</span>
                </Link>

                {/* เพิ่มปุ่ม Gallery */}
                <Link
                  href="/gallery"
                  className={`px-6 py-2 rounded-lg flex items-center space-x-2 transition-all ${
                    pathname === '/gallery'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Image size={20} />
                  <span className="font-medium">แกลเลอรี่</span>
                </Link>
                
                <Link
                  href="/contact"
                  className={`px-6 py-2 rounded-lg flex items-center space-x-2 transition-all ${
                    pathname === '/contact'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Mail size={20} />
                  <span className="font-medium">ติดต่อ</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}