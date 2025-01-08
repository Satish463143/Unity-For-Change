import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";

export const getAllActivities = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/activity/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getGalleryImages = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/gallery/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getAllVideos = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // Access the API key from the Vite environment variable
            const apiKey = import.meta.env.VITE_YT_API_KEY;

            if (!apiKey) {
                setError("API key is not defined.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=UUoh_rKY0yKO3q3JNjfGvCgg&key=${apiKey}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result.items);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Only run once when the component mounts

    return { data, loading, error };
};


export const getGalleryVideos = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/videos/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getGetInvolved = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/get-involved/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getHomeBanner = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/home-banner/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getHowItStarted = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/how-it-started/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const gethowItsGoing = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/how-its-going/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getOurTeam = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/our-team/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getOurValues = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/our-values/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getResources = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/resources/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getSponsors = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/sponsors/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getWhatWeDo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/what-we-do/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getWhatWeOffer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/what-we-offer/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const getWhoWeAre = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/who-we-are/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};

export const addNewInquiry = async (payload) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contact-us/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error("Failed to submit inquiry");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

