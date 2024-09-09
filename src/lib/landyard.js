// lib/lanyard.js
export async function fetchLanyardData(userId) {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch Lanyard data');
    }
    
    const data = await response.json();
    return data;
  }
  