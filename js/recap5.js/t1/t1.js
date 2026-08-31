const requestURL = 'https://reqres.in/api/users/1';

async function getUser() {
  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'free_user_3Ig0PKLmgp7bqDNakNCdLyc6N7x',
      },
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

getUser();
