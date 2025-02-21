import axios from "axios";
// Delay between retries (5 sec)

export const HTTPRequest = {
    get: async (url: string, headers?: object): Promise<any> => {
        try {
            const response = await axios.get(url, { headers: headers || {} });
            if (response.status == 200 && response.data) { // Reset counter on success
                return response.data;
            } else {
                throw new Error(`HTTP request failed with status: ${response.status}`);
            }
        } catch (error) {
            throw error; // Important: React Query needs this to set `isError: true`
        }
    }
}
