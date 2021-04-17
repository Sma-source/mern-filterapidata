import { React, useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import axios from "axios";

const BootcampsPage = () => {
  // Component state
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(false);

  // Side Effects
  useEffect(() => {
    let cancel;
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios({
          method: "GET",
          url: `/api/v1/bootcamps`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setBootcamps(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      {/* Filtering and Sorting Section */}

      {/* Bootcamps Listing */}
    </Container>
  );
};

export default BootcampsPage;
