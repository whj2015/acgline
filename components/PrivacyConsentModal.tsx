import React, { useState, useEffect } from 'react';
import { Shield, X, ExternalLink, Check } from 'lucide-react';

interface PrivacyConsentModalProps {
  onAccept: () => void;
  onDecline: () => void;
}

const PrivacyConsentModal: React.FC<PrivacyConsentModalProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    setTimeout(() => onAccept(), 300);
  };

  const handleDecline = () => {
    setIsVisible(false);
    setTimeout(() => onDecline(), 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleDecline}
      />

      <div
        className={`relative w-full max-w-lg bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl transform transition-all duration-300 ${
          isVisible ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
        }`}
      >
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="关闭"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
              <Shield className="text-violet-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">隐私协议</h2>
              <p className="text-sm text-slate-400">请阅读并同意我们的隐私政策</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-4 mb-6 max-h-48 overflow-y-auto text-sm text-slate-300 leading-relaxed">
            <p className="mb-3">
              欢迎访问 AcgLine.Org。为了更好地保障您的权益，请您在使用我们的服务前仔细阅读并充分理解
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 underline inline-flex items-center gap-1 mx-1"
              >
                《隐私协议》
                <ExternalLink size={12} />
              </a>
              。
            </p>
            <p className="mb-3">
              我们将按照法律法规要求，采取相应安全保护措施，尽力保护您的个人信息安全可控。
            </p>
            <p>
              点击"同意并继续"即表示您已阅读并同意我们的隐私协议。如果您不同意，请选择"拒绝"并离开本网站。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg hover:shadow-violet-500/20 flex items-center justify-center gap-2"
            >
              <Check size={18} />
              同意并继续
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 px-6 py-3 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all"
            >
              拒绝
            </button>
          </div>

          <p className="text-xs text-slate-500 text-center mt-4">
            如您拒绝，将无法使用本网站的完整功能
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyConsentModal;
