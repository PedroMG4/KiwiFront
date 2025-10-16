import React from 'react';
import Image from 'next/image';

export default function Logo({ className = '', width = 160, height = 45, priority = false }) {
  return (
    <Image 
      src="/assets/img/logoSOLO.png" 
      alt="Kiwi Marketing Logo" 
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={(e) => {
        console.error('Error loading logo:', e);
        // Fallback a una imagen por defecto si falla
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQ1IiB2aWV3Qm94PSIwIDAgMTYwIDQ1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQ1IiBmaWxsPSIjN0FDOTQzIi8+Cjx0ZXh0IHg9IjgwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+S0lXSTwvdGV4dD4KPC9zdmc+';
      }}
    />
  );
}
