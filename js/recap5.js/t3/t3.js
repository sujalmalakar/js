const requestURL = 'https://reqres.in/api/unknown/23';

async function getData() {
  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'free_user_3Ig0PKLmgp7bqDNakNCdLyc6N7x',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getData();
