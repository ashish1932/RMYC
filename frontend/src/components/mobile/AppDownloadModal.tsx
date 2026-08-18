import React from 'react';
import {
  X,
  Download,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  QrCode
} from 'lucide-react';
import { RMYC_MOBILE_RELEASE } from '../../data/rmycMobileData';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-slate-800">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-rmyc-navy text-rmyc-gold flex items-center justify-center mx-auto mb-3 shadow-lg border border-rmyc-gold/30">
            <Smartphone className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-rmyc-gold-dark block mb-1">
            OFFICIAL MOBILE APP
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rmyc-navy">
            Download RMYC App
          </h3>
          <p className="text-xs text-slate-600 mt-1 font-medium">
            Royal Madras Yacht Club · Member Pass & Marine Weather
          </p>
        </div>

        {/* Direct APK Download Highlight Box */}
        <div className="bg-gradient-to-br from-[#0F2342] to-[#0A192F] text-white rounded-2xl p-5 mb-6 border border-rmyc-gold/40 shadow-lg text-center relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-rmyc-gold/15 rounded-full blur-xl" />
          <span className="text-[9px] font-bold text-rmyc-gold uppercase tracking-widest block mb-1">
            DIRECT ANDROID PACKAGE (.APK)
          </span>
          <h4 className="font-bold text-lg text-white mb-1">RMYC Android Release APK</h4>
          <div className="flex justify-center items-center gap-3 text-[11px] text-slate-300 mb-4 font-mono">
            <span>Version {RMYC_MOBILE_RELEASE.version}</span>
            <span>•</span>
            <span>{RMYC_MOBILE_RELEASE.apkSize}</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">Verified Build</span>
          </div>

          <a
            href={RMYC_MOBILE_RELEASE.apkDownloadUrl}
            download="RMYC-Mobile-App.apk"
            className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-110 text-rmyc-navy font-extrabold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-100"
          >
            <Download className="w-5 h-5" />
            <span>Download Android APK File</span>
          </a>
        </div>

        {/* Features List */}
        <div className="space-y-2 mb-6 text-xs text-slate-700 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Digital Member Pass with QR Code scanner</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Live Bay of Bengal weather telemetry & tide forecasts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Instant boat slot bookings (J80, Seabird, Enterprise)</span>
          </div>
        </div>

        {/* Store Links & QR Code */}
        <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-center">
          <a
            href={RMYC_MOBILE_RELEASE.playStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 flex items-center justify-center gap-2 transition-colors"
          >
            <span>Google Play Store</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a
            href={RMYC_MOBILE_RELEASE.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 flex items-center justify-center gap-2 transition-colors"
          >
            <span>Apple App Store</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-4 text-[10px] text-slate-500 font-medium flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-rmyc-gold-dark" />
          <span>Official Release · Royal Madras Yacht Club</span>
        </div>
      </div>
    </div>
  );
};
