import { useState } from 'react';
import { Accessibility, Plus, Minus, RefreshCw } from 'lucide-react';

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <>
      <style>{`
        .high-contrast {
          filter: contrast(1.5) !important;
        }
        .high-contrast * {
          border-color: #000 !important;
        }
      `}</style>
      
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-6 w-72 border-2 border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-gray-900">הגדרות נגישות</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">גודל טקסט</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label="הקטן טקסט"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="flex-1 text-center font-medium">{fontSize}%</span>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label="הגדל טקסט"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                  <button
                    onClick={resetFontSize}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label="אפס גודל טקסט"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <button
                  onClick={toggleContrast}
                  className={`w-full p-3 rounded-lg font-medium transition-all ${
                    highContrast
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {highContrast ? 'ביטול ניגודיות גבוהה' : 'ניגודיות גבוהה'}
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="תפריט נגישות"
        >
          <Accessibility className="w-8 h-8" />
        </button>
      </div>
    </>
  );
}
