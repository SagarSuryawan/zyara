import React, { useEffect } from "react";
import axios from "axios";

function FetchData() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://real-time-amazon-data.p.rapidapi.com/influencer-profile",
          {
            headers: {
                'x-rapidapi-key': '751ff075d8msh2a6eb4439964a7dp1633c2jsnb9377ffa3edd',
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
          }
        );
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    fetchData();
  }, []);

  return;
}

export default FetchData;
