const [filteredData, setFilteredData] = useState([]); // State สำหรับเก็บข้อมูลที่กรองแล้ว
useEffect(() => {
    const sortedData = [...searchResult].sort((a, b) => {
      if (sortBy === "cases") return b.cases - a.cases;
      if (sortBy === "deaths") return b.deaths - a.deaths;
      return new Date(b.date) - new Date(a.date);
    });
  
    const filtered = sortedData.filter(item => {
      if (!filterBy) return true;
      return item.cases >= filterBy;
    });
  
    setFilteredData(filtered); // อัปเดต filteredData
  }, [searchResult, sortBy, filterBy]); // อัปเดตเมื่อมีการเปลี่ยนแปลงที่ searchResult, sortBy, หรือ filterBy
  