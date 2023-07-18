import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Shop.css";
import "./script";

function Shop() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/watches');
        setWatches(response.data);
      } catch (error) {
        console.log(error);
      };
    };

    fetchData();
  }, []);


  return (
    <div>
          <h1 className="hero-heading">Dive into our Collection</h1>
            <p className="hero-desc">
              Your Perfect Timepiece Awaits
            </p>

            <section class="products">
              {watches.map(watch => (
                <div>
                 
                </div>
              ))}
            </section>
    </div>
  );
}

export default Shop;