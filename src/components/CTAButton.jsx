import React from 'react';
import Link from 'next/link';

export default function CTAButton({ href, children, variant = 'primary', ...props }) {
  const baseClasses = 'cta-button';
  const variantClasses = variant === 'secondary' ? 'cta-button--secondary' : 'cta-button--primary';
  
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </Link>
  );
}



