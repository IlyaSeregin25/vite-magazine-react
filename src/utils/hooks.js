import { useEffect } from 'react';

export const useChangeBodyClassLock = condition => {
  useEffect(() => {
    if (condition) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [condition]);
};
