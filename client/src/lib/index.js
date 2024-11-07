export const getData = async (endpoint) => {
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Data Fetching ERROR: ${response.statusText} (${response.status})`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error while fetching data:", error.message);
        throw error;
    }
};
