import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useGlobalLinkHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const handleLink: EventListener = (e) => {
      // @ts-ignore
      if (e.currentTarget.tagName === 'A' && e.currentTarget.dataset.client === 'true') {
        e.preventDefault();
        // @ts-ignore
        router.push(e.target.href, e.target.href, { shallow: true });
      }
    }

    document.addEventListener('click', handleLink);

    return () => {
      document.removeEventListener('click', handleLink);
    }
  }, []);
}