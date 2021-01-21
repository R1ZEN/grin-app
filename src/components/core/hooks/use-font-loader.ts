import { useEffect } from 'react';
import robotoFontFace from 'public/roboto-font-face.json';

export const useFontLoader = () => {
  useEffect(() => {
    Promise.all(
      robotoFontFace.map((item) => {
        // @ts-ignore
        const font = new FontFace(item['font-family'], item.src, {
          style: item['font-style'],
          weight: item['font-weight'],
          unicodeRange: item['unicode-range'],
        });

        return font.load().then(() => font);
      }),
    ).then((fonts) => {
      fonts.map((font) => {
        // @ts-ignore
        document.fonts.add(font);
      });
    });
  }, [])
}

