    // ==================================================
    // DEFINE FUNCTION(S)
    // ==================================================
    
    function quotient(x,y) {

      if (x == undefined && y == undefined) {

          x = y = 0;

      } else {

          // Ensure parameters are defined
          var x = (x == undefined) ? 1 : parseFloat(x);
          var y = (y == undefined) ? 1 : parseFloat(y);

      }

      var val = (x / y);

      // Ensure decimals are rounded to 2 d.p only if necessary 

      return +(Math.round(val + "e+2")  + "e-2");

    }

    // ==================================================
    // DEFINE AND EXECUTE TEST CASES
    // ==================================================
    try {
      // --------------------------------------------------
      // Test Case 1
      // --------------------------------------------------
      // It should return the quotient of two numbers.
      var result = quotient(2, 2);

      if (result !== 1) throw new Error('Expected quotient(2, 2) to be 1. Received: ' + result);

      // --------------------------------------------------
      // Test Case 2
      // --------------------------------------------------
      // It should return the text 'ERROR' when the second number is 0.

      // --------------------------------------------------
      // Test Case 3
      // --------------------------------------------------
      // It should ignore additional numbers.

      // --------------------------------------------------
      // Test Case 4
      // --------------------------------------------------
      // When invoked with only 1 number, it should return that number.

      // --------------------------------------------------
      // Test Case 5
      // --------------------------------------------------
      // When invoked with no numbers, it should return 0.

      console.log('All tests passed successfully.');

    // ==================================================
    // PRINT ERRORS
    // ==================================================
    } catch (e) {
      console.warn('Whoops, the following test did not pass:');
      console.error(e.message);
    }
