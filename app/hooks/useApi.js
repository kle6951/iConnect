import { useState } from "react";
export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // ...args to have multiple arguments passed
  const request = async (...args) => {
    // loading handler
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    // Handle server disconnection
    if (!response.ok) return setError(true);
    setError(false);
    setData(response.data);
  };
  return { data, error, loading, request };
};