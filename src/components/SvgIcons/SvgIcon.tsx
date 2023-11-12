/**
 * Компонент импортирует svg иконку из папки `src/assets/icons`
 */
import React, { FC, useEffect, useState } from 'react';
import { ISvgIconProps } from '../../types/ISvgIcons';

const SvgIcon: FC<ISvgIconProps> = ({ iconName }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(require(`./../../assets/icons/${iconName}.svg`));
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error(`Error loading SVG icon ${iconName}:`, error);
      }
    };

    fetchSvg();
  }, [iconName]);

  return (
    <>
      {svgContent && (
        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`} alt={iconName} />
      )}
    </>
  );
};

export default SvgIcon;

