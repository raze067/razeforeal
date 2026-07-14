import React, { useState, memo } from 'react';
import { Mail, MessageCircle, Check } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ContactButtons = memo(function ContactButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('9829573307');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 relative z-10">
      <MagneticButton>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jenis777shahu@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button rounded-xl px-6 py-3 md:px-8 md:py-4 text-[11px] md:text-sm uppercase tracking-widest font-medium flex justify-center items-center gap-2 w-full sm:w-auto"
        >
          <Mail className="w-4 h-4" />
          Email Me
        </a>
      </MagneticButton>
      <MagneticButton>
        <button 
          onClick={handleCopy}
          className="glass-button rounded-xl px-6 py-3 md:px-8 md:py-4 text-[11px] md:text-sm uppercase tracking-widest font-medium flex justify-center items-center gap-2 w-full sm:w-auto"
        >
          {copied ? <Check className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
          {copied ? 'Number Copied!' : 'WhatsApp'}
        </button>
      </MagneticButton>
    </div>
  );
});

export default ContactButtons;
