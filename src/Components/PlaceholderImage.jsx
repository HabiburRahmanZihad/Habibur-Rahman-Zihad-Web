import React from 'react';

const PlaceholderImage = ({ width = 400, height = 300, text = "Project Image", className = "" }) => {
    return (
        <div
            className={`bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ${className}`}
            style={{ width: `${width}px`, height: `${height}px`, minHeight: `${height}px` }}
        >
            <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-primary font-semibold">{text}</div>
                <div className="text-xs text-base-content/50 mt-1">{width} × {height}</div>
            </div>
        </div>
    );
};

export default PlaceholderImage;
