import React from 'react';
import { galleryImages } from '../../components/ui09/ui09Data';

const UI09Gallery = () => {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h1 className="text-4xl font-bold text-slate-900">Travel Gallery</h1>
                <p className="text-slate-500">Snapshots from our travelers around the globe.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {galleryImages.map((photo) => (
                    <div
                        key={photo.id}
                        className={`relative rounded-2xl overflow-hidden break-inside-avoid group cursor-pointer ${photo.size === 'large' ? 'aspect-[3/4]' : 'aspect-square'
                            }`}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <p className="text-white font-bold">{photo.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UI09Gallery;
