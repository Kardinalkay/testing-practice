    // ==================================================
    // DEFINE FUNCTION(S)
    // ==================================================
    function difference(x,y) {

        // Ensure parameters are defined
        var x = (x == undefined) ? 0 : parseFloat(x);
        var y = (y == undefined) ? 0 : parseFloat(y);

        var val = (x - y);

        return +(Math.round(val + "e+2")  + "e-2");
    }

    // ==================================================
    // DEFINE AND EXECUTE TEST CASES
    // ==================================================
    try {
      // --------------------------------------------------
      // Test Case 1
      // --------------------------------------------------
      // It should return the difference of two numbers.
      var result = difference(2, 1);
      
      if (result !== 1) throw new Error('Expected difference(2, 1) to be 1. Received: ' + result);

      // --------------------------------------------------
      // Test Case 2
      // --------------------------------------------------
      // It should ignore additional numbers (3 in this case).
      var result = difference(3, 2, 1);

      if (result !== 1)  throw new Error('Expected difference(3, 2, 1) to be 1. Received: ' + result);


      // --------------------------------------------------
      // Test Case 3
      // --------------------------------------------------
      // When invoked with only 1 number, it should return that number.
      var result = difference(1);

      if (result !== 1) throw new Error('Expected difference(1) to be 1. Received: ' + result);


      // --------------------------------------------------
      // Test Case 4
      // --------------------------------------------------
      // When invoked with no numbers, it should return 0.
      var result = difference();

      if (result !== 0) throw new Error('Expected difference() to be 0. Received: ' + result);


      // --------------------------------------------------
      // Test Case 5
      // --------------------------------------------------
      // When invoked with string numbers, it should evaluate them as true integers
      var result = difference('2', '1');

      if (result !== 1) throw new Error("Expected difference('2','1') to be 0. Received: " + result);


      // --------------------------------------------------
      // Test Case 6
      // --------------------------------------------------
      // When invoked with decimals, it must be rounded to 2 d.p
      var result = difference(4.4444, 3.3);

      if (result !== 1.14)  throw new Error("Expected difference(4.4444, 3.3) to be 0. Received: " + result);


      // --------------------------------------------------
      // Test Case 7
      // --------------------------------------------------
      // When invoked with strings, it must evaluate to NaN
      var result = difference('string');

      if (!isNaN(result)) throw new Error("Expected difference('string') to be NaN. Received: " + result);

      console.log('All tests passed successfully.');

    // ==================================================
    // PRINT ERRORS
    // ==================================================
    } catch (e) {
      console.warn('Whoops, the following test did not pass:');
      console.log(e.name);
      console.error(e.message);
    }
