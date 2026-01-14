import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-title2',
    md: 'text-title1',
    lg: 'text-large-title',
  };

  const imageSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  return (
    <h1 className={`${sizeClasses[size]} text-text-primary tracking-tight`}>
      <span className="text-apple-blue font-bold">K</span>
      <span className="font-normal">orea </span>
      <span className="text-apple-blue font-bold">
        <Image
          src="/main-o.svg"
          alt="O"
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="inline-block align-middle mx-[0.5px]"
          style={{ marginBottom: '0.15em' }}
        />
        <span>nbording</span>
      </span>
    </h1>
  );
}
