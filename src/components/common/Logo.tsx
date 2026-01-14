interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-title2',
    md: 'text-title1',
    lg: 'text-large-title',
  };

  return (
    <h1 className={`${sizeClasses[size]} text-text-primary tracking-tight`}>
      <span className="text-apple-blue font-bold">K</span>
      <span className="font-normal">orea </span>
      <span className="text-apple-blue font-bold">Onbording</span>
    </h1>
  );
}
