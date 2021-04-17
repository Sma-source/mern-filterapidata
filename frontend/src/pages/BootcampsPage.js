import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import axios from "axios";

const BootcampsPage = () => {
  // Component state
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      {/* Filtering and Sorting Section */}

      {/* Bootcamps Listing */}
    </Container>
  );
};

export default BootcampsPage;
