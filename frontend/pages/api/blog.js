

useEffect(() => {
  const fetchData = async () => {
    try {
      const [projectResponse, blogsResponse] = await Promise.all([
        fetch('/api/projects'),
        fetch('/api/blogs')
      ]);

      if (!projectResponse.ok || !blogsResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const projectData = await projectResponse.json();
      const blogData = await blogsResponse.json();

      setAlldata(projectData);
      setAllwork(blogData);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);