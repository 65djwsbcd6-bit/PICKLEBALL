import React, { useState } from 'react';
import { Image as ImageIcon, Play, Copy, Check, Upload, RefreshCw } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'image' | 'video';
  filename: string;
  description: string;
  aspectRatio?: '16:9' | '21:9' | '4:3' | '3:2' | '1:1';
  className?: string;
  originalLink?: string;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  type,
  filename,
  description,
  aspectRatio = '16:9',
  className = '',
  originalLink
}) => {
  const [copied, setCopied] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [testPreviewUrl, setTestPreviewUrl] = useState<string | null>(null);

  // Exact relative GitHub repository path (e.g. public/images/home/hero-pickleball.jpg or public/videos/exercises/...)
  const gitHubPath = filename.startsWith('/') ? `public${filename}` : `public/${filename}`;
  // Web serving path (e.g. /images/home/hero-pickleball.jpg or local test file)
  const activeSrc = testPreviewUrl || filename;

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '21:9':
        return 'aspect-[21/9]';
      case '4:3':
        return 'aspect-[4/3]';
      case '3:2':
        return 'aspect-[3/2]';
      case '1:1':
        return 'aspect-square';
      case '16:9':
      default:
        return 'aspect-video';
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(gitHubPath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setTestPreviewUrl(url);
      setHasLoaded(true);
    }
  };

  const handleReset = () => {
    setTestPreviewUrl(null);
    setHasLoaded(false);
  };

  return (
    <div
      className={`relative w-full ${getAspectClass()} rounded-xl overflow-hidden border border-dashed border-[#93C5FD] bg-[#F4F8FD] flex flex-col items-center justify-center text-center transition-all hover:border-[#2563EB] group ${className}`}
    >
      {/* Clean standard HTML <img> tag pointing directly to the static path */}
      {type === 'image' && (
        <img
          src={activeSrc}
          alt={description}
          onLoad={() => setHasLoaded(true)}
          onError={() => {
            if (!testPreviewUrl) setHasLoaded(false);
          }}
          className={`w-full h-full object-cover transition-opacity duration-200 ${
            hasLoaded ? 'block z-10' : 'hidden'
          }`}
        />
      )}

      {/* Clean standard HTML <video> tag pointing directly to the static path */}
      {type === 'video' && (
        <video
          src={activeSrc}
          controls
          playsInline
          preload="metadata"
          onLoadedData={() => setHasLoaded(true)}
          onError={() => {
            if (!testPreviewUrl) setHasLoaded(false);
          }}
          className={`w-full h-full object-cover ${
            hasLoaded ? 'block z-10' : 'hidden'
          }`}
        >
          <source src={activeSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* If a test preview is active, provide a reset button */}
      {hasLoaded && testPreviewUrl && (
        <button
          onClick={handleReset}
          className="absolute top-3 right-3 z-20 bg-white/95 hover:bg-white text-slate-800 text-xs px-2.5 py-1 rounded-md shadow-sm font-medium flex items-center gap-1 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3 h-3" /> Reset Placeholder
        </button>
      )}

      {/* Static Asset Placeholder Box: Displayed when asset is awaiting upload to public/ */}
      {!hasLoaded && (
        <div className="flex flex-col items-center justify-center max-w-md w-full px-3 py-4 select-none">
          {/* Icon Badge */}
          <div className="w-11 h-11 rounded-full bg-white border border-[#DCE6F1] shadow-xs flex items-center justify-center text-[#2563EB] mb-3 group-hover:scale-105 transition-transform">
            {type === 'video' ? (
              <Play className="w-5 h-5 fill-[#2563EB]/20 text-[#2563EB] ml-0.5" />
            ) : (
              <ImageIcon className="w-5 h-5 text-[#2563EB]" />
            )}
          </div>

          {/* Type & Aspect Ratio */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#123B65] bg-[#EAF3FF] px-2 py-0.5 rounded">
              {type === 'video' ? 'Static Video Asset' : 'Static Image Asset'}
            </span>
            <span className="text-[11px] text-[#64748B] font-mono">
              {aspectRatio}
            </span>
          </div>

          {/* Exact Relative GitHub Upload Path inside <code> */}
          <div className="flex items-center gap-1.5 bg-white border border-[#DCE6F1] px-2.5 py-1.5 rounded-md shadow-2xs mb-2 max-w-full">
            <span className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider shrink-0">Upload to:</span>
            <code className="text-xs font-mono font-bold text-[#123B65] truncate select-all">
              {gitHubPath}
            </code>
            <button
              onClick={handleCopy}
              title="Copy exact upload path"
              className="p-1 text-[#64748B] hover:text-[#2563EB] hover:bg-[#EAF3FF] rounded transition-colors shrink-0 cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Asset Description */}
          <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed px-2">
            {description}
          </p>

          {/* Interactive Test Preview Option */}
          <div className="mt-3 flex items-center gap-2 pt-2 border-t border-[#DCE6F1]/60">
            <label className="cursor-pointer text-[11px] font-medium text-[#2563EB] hover:text-[#123B65] bg-white hover:bg-[#EAF3FF] border border-[#DCE6F1] px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors">
              <Upload className="w-3 h-3" />
              <span>Test Preview File</span>
              <input
                type="file"
                accept={type === 'video' ? 'video/*' : 'image/*'}
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>

            {originalLink && (
              <span className="text-[10px] text-[#64748B]">
                Milestone 2 source recorded
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
