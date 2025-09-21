interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline';
}

export const Avatar = ({ src, alt = 'User avatar', size = 'md', status }: AvatarProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className="relative">
      <div className={`${sizeClasses[size]} rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden`}>
        {src && !src.includes('/api/placeholder') ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <span className={`text-sm font-medium text-gray-700 dark:text-dark-text ${src && !src.includes('/api/placeholder') ? 'hidden' : ''}`}>
          {alt.charAt(0).toUpperCase()}
        </span>
      </div>
      {status && (
        <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full border border-white dark:border-dark-section" style={{
          backgroundColor: status === 'online' ? '#B692C2' : '#E3A5C7'
        }} />
      )}
    </div>
  );
};