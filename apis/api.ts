import { PageData } from "models/page_objects";

export const convertApiToPageData = async (path:String): Promise<PageData> => {
    const apiUrl = `https://newscode-fc5e6-default-rtdb.firebaseio.com/mapanalysis/pages/${path}/.json`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
  
      const jsonData = await response.json();
  
      return {
        Objects: jsonData.Objects || [],
        icon: jsonData.icon || "",
        title: jsonData.title || "",
      };
    } catch (error) {
      console.error("Error fetching data from API:", error);
      throw error;
    }
  };
  