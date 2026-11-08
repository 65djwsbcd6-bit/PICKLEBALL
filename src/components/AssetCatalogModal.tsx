import React, { useState } from 'react';
import { ASSET_INVENTORY } from '../data/assetCatalog';
import { AssetRecord } from '../types/training';
import { X, Search, Copy, Check, Folder, Film, Image as ImageIcon, ExternalLink } from 'lucide-react';

interface AssetCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetCatalogModal: React.FC<AssetCatalogModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredAssets = ASSET_INVENTORY.filter((asset) => {
    const matchesType = filterType === 'all' || asset.type === filterType;
    const matchesSearch =
      asset.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.pageContext.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#123B65]/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl border border-[#DCE6F1] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 border-b border-[#DCE6F1] bg-[#F8FAFD] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] mb-1">
              <Folder className="w-3.5 h-3.5" />
              <span>Project Media Specification</span>
              <span>·</span>
              <span className="text-[#64748B]">Alexies Jean Ballesteros | PE4</span>
            </div>
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              Media Asset Reference & Upload Catalog
            </h2>
            <p className="text-sm text-[#475569] mt-1">
              Complete inventory of all image and video placeholders across the 6 pages. Place your files into the designated paths below.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#123B65] hover:bg-[#EAF3FF] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="px-6 py-3 border-b border-[#DCE6F1] bg-white flex flex-wrap items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search filename, page, or movement..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#F8FAFD] border border-[#DCE6F1] rounded-lg focus:outline-none focus:border-[#2563EB] text-[#172B45]"
            />
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-[#F1F5F9] rounded-lg text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 font-medium rounded-md transition-colors ${
                filterType === 'all'
                  ? 'bg-white text-[#123B65] shadow-xs'
                  : 'text-[#64748B] hover:text-[#123B65]'
              }`}
            >
              All Assets ({ASSET_INVENTORY.length})
            </button>
            <button
              onClick={() => setFilterType('image')}
              className={`px-3 py-1 font-medium rounded-md transition-colors flex items-center gap-1 ${
                filterType === 'image'
                  ? 'bg-white text-[#123B65] shadow-xs'
                  : 'text-[#64748B] hover:text-[#123B65]'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#2563EB]" />
              Images
            </button>
            <button
              onClick={() => setFilterType('video')}
              className={`px-3 py-1 font-medium rounded-md transition-colors flex items-center gap-1 ${
                filterType === 'video'
                  ? 'bg-white text-[#123B65] shadow-xs'
                  : 'text-[#64748B] hover:text-[#123B65]'
              }`}
            >
              <Film className="w-3.5 h-3.5 text-[#2563EB]" />
              Videos
            </button>
          </div>
        </div>

        {/* Asset List */}
        <div className="p-6 overflow-y-auto space-y-3">
          {filteredAssets.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#64748B]">
              No assets match your current search query.
            </div>
          ) : (
            filteredAssets.map((asset) => (
              <div
                key={asset.id}
                className="p-3.5 rounded-xl border border-[#DCE6F1] hover:border-[#93C5FD] bg-[#F8FAFD]/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                        asset.type === 'video'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {asset.type}
                    </span>
                    <span className="font-semibold text-[#123B65]">
                      {asset.pageContext}
                    </span>
                    <span className="text-[#64748B]">·</span>
                    <span className="text-[#64748B]">{asset.aspectRatio}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <code className="font-mono text-[12px] font-semibold text-[#2563EB] bg-white px-2 py-0.5 rounded border border-[#DCE6F1]">
                      {asset.filename}
                    </code>
                  </div>

                  <p className="text-[#475569] text-xs leading-relaxed max-w-xl">
                    {asset.description}
                  </p>

                  <div className="text-[11px] text-[#64748B]">
                    <strong>Recommended specs: </strong> {asset.recommendedResolution}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                  <button
                    onClick={() => handleCopy(asset.id, asset.filename)}
                    className="px-3 py-1.5 text-xs font-medium text-[#123B65] bg-white hover:bg-[#EAF3FF] border border-[#DCE6F1] rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedId === asset.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Path</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#DCE6F1] bg-[#F8FAFD] flex items-center justify-between text-xs text-[#64748B]">
          <span>
            Folder structure organized under <code>/images/</code> ready for asset drop-in.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
