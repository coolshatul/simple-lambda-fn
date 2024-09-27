const axios = require('axios');

exports.getTodos = async (event) => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Sample API URL

  try {
    // Make a GET request using axios
    const response = await axios.get(apiUrl);

    // Extract data from the response
    const todos = response.data;

    // Return the data in the required Lambda format
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Data fetched successfully',
        data: todos
      }),
    };
  } catch (error) {
    // Handle any errors
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to fetch data',
        error: error.message,
      }),
    };
  }
};

exports.getTodoById = async (event) => {
  const id = event.pathParameters.id;
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/' + id; // Sample API URL

  try {
    // Make a GET request using axios
    const response = await axios.get(apiUrl);

    // Extract data from the response
    const todo = response.data;

    // Return the data in the required Lambda format
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Data fetched successfully',
        data: todo
      }),
    };
  } catch (error) {
    // Handle any errors
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to fetch data',
        error: error.message,
      }),
    };
  }
};
