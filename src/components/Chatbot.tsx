import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const quickReplies = [
  'Internet assistance',
  'TV & Streaming help',
  'Bundle guidance',
  'Pricing information',
  'Refund policy',
];

const botResponses: { [key: string]: string } = {
  default: "Thanks for reaching out! For immediate assistance, please call us at (484) 763-4162 or email help@giftusinternet.com. Our team is ready to help you find the right service options.",
  'internet assistance': "We'd be happy to help you understand internet service options! Our experts can guide you through speeds, providers, and plans. Call (484) 763-4162 to get started.",
  'tv & streaming help': "Looking for TV and streaming guidance? We can help you compare channel lineups and streaming packages. Reach us at (484) 763-4162 for personalized assistance.",
  'bundle guidance': "Interested in bundled services? We can explain various package combinations from different providers. Call (484) 763-4162 for expert guidance.",
  'pricing information': "Our assistance fee is $29.99 one-time. This covers expert guidance to help you navigate service options. Provider charges are separate. Call (484) 763-4162 for details.",
  'refund policy': "We offer a 7-15 day refund policy on our assistance services. See our Refund Policy page for full details, or call (484) 763-4162 with questions.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { 
      text: "Hello! I'm the IQ Connects assistant. How can I help you today?", 
      isBot: true 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isBot: false }]);

    // Get bot response
    setTimeout(() => {
      const lowerMessage = message.toLowerCase();
      let response = botResponses.default;

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerMessage.includes(key)) {
          response = value;
          break;
        }
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 800);

    setInputValue('');
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.5, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-2xl flex items-center justify-center hover:shadow-blue-500/50 transition-shadow group"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 bg-blue-600 rounded-full opacity-25"
        />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-6 z-40 w-96 h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">IQ Connects</h3>
                  <p className="text-xs text-white/80">Independent Service Assistant</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Quick Replies */}
              {messages.length <= 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xs text-gray-500 text-center mb-2">Quick options:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-3 py-2 rounded-full transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Contact Options */}
            <div className="border-t border-gray-200 p-3 bg-white">
              <div className="flex gap-2 mb-3">
                <a
                  href="tel:+14847634162"
                  className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="mailto:help@giftusinternet.com"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
