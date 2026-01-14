import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

export default function StickyCallButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '(833) 404-3389';
  const phoneNumberDial = '18004438638';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumberDial}`;
  };

  return (
    <>
      {/* Sticky Call Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        className="fixed bottom-6 right-6 z-40"
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-0 right-20 bg-white rounded-2xl shadow-2xl p-6 w-72 border-2 border-accent"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Need Assistance?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Speak with our expert team for independent guidance
                </p>
                <a
                  href={`tel:${phoneNumberDial}`}
                  className="block w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-xl transition-colors mb-2"
                >
                  {phoneNumber}
                </a>
                <p className="text-xs text-gray-500">
                  Monday-Friday: 8am-10pm EST<br />
                  Sat-Sun: 9am-8pm EST
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 bg-gradient-to-br from-accent to-orange-500 rounded-full shadow-2xl flex items-center justify-center group hover:shadow-accent/50 transition-shadow"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-accent rounded-full opacity-25"
          />
          <Phone className="w-7 h-7 text-white relative z-10" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse" />
        </motion.button>
      </motion.div>
    </>
  );
}
