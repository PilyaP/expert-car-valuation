import React from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Кастомный src для фолбэка (опционально) */
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  alt = '',
  className,
  style,
  fallbackSrc = ERROR_IMG_SRC,
  onError,
  ...rest
}: Props) {
  const [failed, setFailed] = React.useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Переключаемся на фолбэк один раз
    if (!failed) setFailed(true);
    // не ломаем внешний onError, если передан
    onError?.(e);
  };

  // Базовые классы: block убирает нижний «инлайн-зазор», w/h тянут картинку на контейнер
  const base = 'block w-full h-full';
  const merged = className ? `${base} ${className}` : base;

  return (
    <img
      src={failed ? fallbackSrc : (src as string)}
      alt={alt}
      className={merged}
      style={style}
      onError={handleError}
      loading={rest.loading ?? 'lazy'}
      {...rest}
    />
  );
}
