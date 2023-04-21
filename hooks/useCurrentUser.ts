import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

/* Uses SWR to fetch user data */
const useCurrentUser = () => {
  const {data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useCurrentUser;
