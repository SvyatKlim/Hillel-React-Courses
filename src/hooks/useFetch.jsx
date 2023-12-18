import { useState, useEffect, useCallback, useRef } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shouldFetch, setShouldFetch] = useState(true);
    const isInitialFetch = useRef(true);
    const isMounted = useRef(true);
    const abortControllerRef = useRef(new AbortController());

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    const shuffleArray = useCallback((array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }, []);

    const fetchData = async () => {
        abortControllerRef.current.abort();
        abortControllerRef.current = new AbortController();
        const signal = abortControllerRef.current.signal;

        try {
            setError(null);
            setIsLoading(true);

            const response = await fetch(url, { signal });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const responseData = await response.json();
            const processedData = isInitialFetch.current ? responseData : shuffleArray(responseData);

            if (isMounted.current) {
                setData(processedData);
            }
        } catch (e) {
            if (isMounted.current && e.name !== 'AbortError') {
                setError(e.message);
            }
        } finally {
            if (isMounted.current) {
                setIsLoading(false);
                isInitialFetch.current = false;
            }
        }
    };

    useEffect(() => {
        if (shouldFetch) {
            fetchData();
            setShouldFetch(false);
        }
    }, [shouldFetch]);

    const refetch = useCallback(() => setShouldFetch(true), []);

    return {
        data,
        isLoading,
        error,
        refetch,
    };
};

export default useFetch;
