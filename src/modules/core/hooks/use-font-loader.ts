import { useEffect, useRef } from 'react';

interface IRobotoJson {
  'font-family': string
  'font-style': string;
  'font-weight': string;
  'font-display': string;
  'src': string;
  'unicode-range': string;
}

// Required: @types/css-font-loading-module
export const useFontLoader = () => {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) {
      return;
    }

    fetch('/roboto-font-face.json')
      .then((res) => res.json())
      .then((robotoFontFace: IRobotoJson[]) => {
        return Promise.all(
          robotoFontFace.map((item) => {
            const font = new FontFace(item['font-family'], item.src, {
              style: item['font-style'],
              weight: item['font-weight'],
              unicodeRange: item['unicode-range'],
            });

            return font.load().then(() => font);
          })
        );
      })
      .then((fonts) => {
      fonts.map((font) => {
        document.fonts.add(font);
      });

      document.fonts.ready.then(() => {
        ref.current = true;
      });
    });
  }, []);
};

