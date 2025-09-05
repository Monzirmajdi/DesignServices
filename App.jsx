import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Globe, Palette, FileText, CreditCard, Receipt, BookOpen, Image, Share2, Package } from 'lucide-react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('ar')

  const services = {
    ar: [
      { name: 'اللوقو', price: 50, icon: Palette },
      { name: 'باقة الهوية Lite', description: 'لوقو - نمط او باترن - ورقة مروسة - بطاقة عمل - ختم', price: 100, icon: Package },
      { name: 'بطاقة عمل', price: 18, icon: CreditCard },
      { name: 'ورقة مروسة', price: 18, icon: FileText },
      { name: 'فاتورة', price: 20, icon: Receipt },
      { name: 'بروشور', price: 10, icon: BookOpen },
      { name: 'بوستر', price: 10, icon: Image },
      { name: 'منشور سوشيال ميديا', price: 10, icon: Share2 },
      { name: 'باقة التصميم الشهرية Lite', description: '4 تصاميم في الشهر', price: 40, icon: Package },
      { name: 'باقة التصميم الشهرية Mid', description: '8 تصاميم في الشهر', price: 80, icon: Package },
      { name: 'باقة التصميم الشهرية Extra', description: '12 تصميم في الشهر', price: 120, icon: Package }
    ],
    en: [
      { name: 'Logo', price: 50, icon: Palette },
      { name: 'Identity Package Lite', description: 'Logo - Pattern - Letterhead - Business Card - Stamp', price: 100, icon: Package },
      { name: 'Business Card', price: 18, icon: CreditCard },
      { name: 'Letterhead', price: 18, icon: FileText },
      { name: 'Invoice', price: 20, icon: Receipt },
      { name: 'Brochure', price: 10, icon: BookOpen },
      { name: 'Poster', price: 10, icon: Image },
      { name: 'Social Media Post', price: 10, icon: Share2 },
      { name: 'Monthly Design Package Lite', description: '4 designs per month', price: 40, icon: Package },
      { name: 'Monthly Design Package Mid', description: '8 designs per month', price: 80, icon: Package },
      { name: 'Monthly Design Package Extra', description: '12 designs per month', price: 120, icon: Package }
    ]
  }

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-black to-gray-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-white/5 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-white">
              {language === 'ar' ? 'قائمة خدمات التصميم' : 'Design Services Menu'}
            </h1>
            <Button 
              onClick={toggleLanguage}
              variant="outline"
              className="glass-effect-dark border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[language].map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="glass-card-dark group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-br from-white/10 to-white/20 group-hover:from-white/20 group-hover:to-white/30 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-white">${service.price}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  {service.description && (
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="glass-card-dark inline-block px-8 py-6">
            <p className="text-gray-300 text-lg">
              {language === 'ar' 
                ? 'جميع الأسعار بالدولار الأمريكي' 
                : 'All prices are in US Dollars'
              }
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

