class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  function Max(array) {
    if (array.length == 0) {
        throw new ValidationError("No date");
      }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) max = array[i];
    }
      return max;
  
  }
  try {
    console.log(Max([3,4,5]));
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log("Invalid data: " + err.message); 
    } else if (err instanceof SyntaxError) { 
        console.log("JSON Syntax Error: " + err.message);
    } else {
      throw err; 
    }
  }