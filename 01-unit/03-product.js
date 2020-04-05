    // ==================================================
    // DEFINE FUNCTION(S)
    // ==================================================
    function product(x,y) {

        if (x == undefined && y == undefined) {

            x = y = 0;

        } else {

            // Ensure parameters are defined
            var x = (x == undefined) ? 1 : parseFloat(x);
            var y = (y == undefined) ? 1 : parseFloat(y);

        }

        var val = (x * y);

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

      if (result !== 6)  throw new Error('Expected product(3, 2, 1) to be 6. Received: ' + result);


      // --------------------------------------------------
      // Test Case 4
      // --------------------------------------------------
      // When invoked with only 1 number, it should return that number.
      var result = product(1);

      if (result !== 1) throw new Error('Expected product(1) to be 1. Received: ' + result);


      // --------------------------------------------------
      // Test Case 5
      // --------------------------------------------------
      // When invoked with no numbers, it should return 0.
      var result = product();

      if (result !== 0) throw new Error('Expected product() to be 0. Received: ' + result);


      // --------------------------------------------------
      // Test Case 6
      // --------------------------------------------------
      // When invoked with decimals, it must be rounded to 2 d.p
      var result = product(4.4444, 3.3);

      if (result !== 14.67)  throw new Error("Expected product(4.4444, 3.3) to be 14.67. Received: " + result);


      // --------------------------------------------------
      // Test Case 7
      // --------------------------------------------------
      // When invoked with strings, it must evaluate to NaN
      var result = product('string');

      if (!isNaN(result)) throw new Error("Expected product('string') to be NaN. Received: " + result);

      console.log('All tests passed successfully.');

    // ==================================================
    // PRINT ERRORS
    // ==================================================
    } catch (e) {
      console.warn('Whoops, the following test did not pass:');
      console.error(e.message);
    }
