    // ==================================================
    // DEFINE FUNCTION(S)
    // ==================================================
    function sum(x,y) {
        return (x + y);
    }

    // ==================================================
    // DEFINE AND EXECUTE TEST CASES
    // ==================================================
    try {
      // --------------------------------------------------
      // Test Case 1
      // --------------------------------------------------
      // It should return the sum of two numbers.
      var result = sum(1, 2);
      
      if (result !== 3)  throw new Error('Expected sum(1, 1) to be 2. Received: ' + result);

      // --------------------------------------------------
      // Test Case 2
      // --------------------------------------------------
      // It should ignore additional numbers (3 in this case).
      var result = sum(1, 2, 3);
       
      if (result !== 3)  throw new Error('Expected sum(1, 2, 3) to be 3. Received: ' + result);


      // --------------------------------------------------
      // Test Case 3
      // --------------------------------------------------
      // When invoked with only 1 number, it should return that number.

      // --------------------------------------------------
      // Test Case 4
      // --------------------------------------------------
      // When invoked with no numbers, it should return 0.

      console.log('All tests passed successfully.');

    // ==================================================
    // PRINT ERRORS
    // ==================================================
    } catch (e) {
      console.warn('Whoops, the following test did not pass:');
      console.log(e.name);
      console.error(e.message);
    }
