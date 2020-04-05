    // ==================================================
    // DEFINE FUNCTION(S)
    // ==================================================
    function product(x,y) {

        // Ensure parameters are defined
        var x = (x == undefined) ? 0 : parseFloat(x);
        var y = (y == undefined) ? 0 : parseFloat(y);

        var val = (x * y);

        return +(Math.round(val + "e+2")  + "e-2");

    }

    // ==================================================
    // DEFINE AND EXECUTE TEST CASES
    // ==================================================
    try {
      // --------------------------------------------------
      // Test Case 1
      // --------------------------------------------------
      // It should return the product of two numbers.
      var result = product(2, 2);

      if (result !== 4) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);

      // --------------------------------------------------
      // Test Case 2
      // --------------------------------------------------
      // It should return 0 when either of the numbers are 0.
      var result = product(1, 0);

      if (result !== 0) throw new Error('Expected product(1, 0) to be 0. Received: ' + result);


      // --------------------------------------------------
      // Test Case 3
      // --------------------------------------------------
      // It should ignore additional numbers.
      var result = product (3, 2, 1);

      if (result !== 1)  throw new Error('Expected difference(3, 2, 1) to be 6. Received: ' + result);


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
