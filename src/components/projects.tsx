"use client";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

// Define the type for the fetched data
interface ImageData {
  id: string;
  author: string;
  download_url: string;
}

export default function Projects() {
  const [data, setData] = useState<ImageData[]>([]);

  // Memoizing the getData function
  const getData = useCallback(async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=10');
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []); // Empty dependency array ensures getData is only created once

  useEffect(() => {
    getData();
  }, [getData]); // Add getData to the dependency array

  return (
    <div className="p-9" id="projects">
      <h2 className="text-2xl text-center pb-14 underline font-bold">Project</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="zoom-in-up">
        {data.map((elem) => (
          <div key={elem.id} className="bg-gray-50 rounded shadow p-4 text-center">
            {/* Use next/image for optimized images */}
            <Image
              className="w-full h-auto rounded mb-2"
              src={elem.download_url}
              alt={elem.author}
              width={500} // Set a width for optimization
              height={300} // Set a height for optimization
            />
            <p className="text-gray-700 text-xl font-bold">{elem.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
