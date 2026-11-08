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
  const [localPreviewUrl, setLocalPreviewUrl] = useState<string | null>(null);
  const [previewError, setPreviewError] = useState(false);

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
    navigator.clipboard.writeText(filename);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalPreviewUrl(url);
      setPreviewError(false);
    }
  };

  return (
    <div
      className={`relative w-full ${getAspectClass()} rounded-xl overflow-hidden border border-dashed border-[#93C5FD] bg-[#F4F8FD] flex flex-col items-center justify-center p-4 text-center transition-all hover:border-[#2563EB] group ${className}`}
    >
      {localPreviewUrl && !previewError ? (
        <div className="absolute inset-0 w-full h-full bg-slate-900 flex items-center justify-center">
          {type === 'video' ? (
            <video
              src={localPreviewUrl}
              controls
              className="w-full h-full object-cover"
              onError={() => setPreviewError(true)}
            />
          ) : (
            <img
              src={localPreviewUrl}
              alt={description}
              className="w-full h-full object-cover"
              onError={() => setPreviewError(true)}
            />
          )}
          <button
            onClick={() => setLocalPreviewUrl(null)}
            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-slate-800 text-xs px-2.5 py-1 rounded-md shadow-sm font-medium flex items-center gap-1 transition-colors"
          >
            <RefreshCw className="w-3 h-3" /> Reset Placeholder
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center max-w-md w-full px-2 select-none">
          {/* Icon Badge */}
          <div className="w-11 h-11 rounded-full bg-white border border-[#DCE6F1] shadow-xs flex items-center justify-center text-[#2563EB] mb-3 group-hover:scale-105 transition-transform">
            {type === 'video' ? (
              <Play className="w-5 h-5 fill-[#2563EB]/20 text-[#2563EB] ml-0.5" />
            ) : (
              <ImageIcon className="w-5 h-5 text-[#2563EB]" />
            )}
          </div>

          {/* Filename & Type Indicator */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#123B65] bg-[#EAF3FF] px-2 py-0.5 rounded">
              {type === 'video' ? 'Video Demonstration Placeholder' : 'Image Asset Placeholder'}
            </span>
            <span className="text-[11px] text-[#64748B] font-mono">
              {aspectRatio}
            </span>
          </div>

          {/* Target File Path */}
          <div className="flex items-center gap-1.5 bg-white border border-[#DCE6F1] px-2.5 py-1 rounded-md shadow-2xs mb-2 max-w-full">
            <code className="text-xs font-mono text-[#123B65] truncate font-medium">
              {filename}
            </code>
            <button
              onClick={handleCopy}
              title="Copy path to clipboard"
              className="p-1 text-[#64748B] hover:text-[#2563EB] hover:bg-[#EAF3FF] rounded transition-colors"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed px-2">
            {description}
          </p>

          {/* Action Row: Local test preview or original link note */}
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
