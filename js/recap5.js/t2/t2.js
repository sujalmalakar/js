const requestURL = 'https://reqres.in/api/users';

async function createUser() {
  try {
    const response = await fetch(requestURL, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'free_user_3Ig0PKLmgp7bqDNakNCdLyc6N7x',
      },

      body: JSON.stringify({
        name: 'Sujal',
        job: 'Developer',
      }),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();
