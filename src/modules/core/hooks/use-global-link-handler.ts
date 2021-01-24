import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useGlobalLinkHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const handleLink = (e) => {
      if (e.currentTarget.tagName === 'A' && e.currentTarget.dataset.client === 'true') {
        e.preventDefault();
        router.push(e.target.href, undefined, { shallow: true });
      }
    };

    document.addEventListener('click', handleLink);

    return () => {
      document.removeEventListener('click', handleLink);
    };
  }, []);
};