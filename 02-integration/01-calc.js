    // ==================================================
    // DEFINE FUNCTION(S)
    // ==================================================

    // Sum function

    function sum(x,y) {

        // Ensure parameters are defined
        var x = (x == undefined) ? 0 : parseFloat(x);
        var y = (y == undefined) ? 0 : parseFloat(y);

        var val = (x + y);

        return +(Math.round(val + "e+2")  + "e-2");
    }

    // Difference function 

    function difference(x,y) {

        // Ensure parameters are defined
        var x = (x == undefined) ? 0 : parseFloat(x);
        var y = (y == undefined) ? 0 : parseFloat(y);

        var val = (x - y);

        return +(Math.round(val + "e+2")  + "e-2");
    }


    // Product function 

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

    // Quotient function

    function quotient(x,y) {

      if (x == undefined && y == undefined) {

          return 0;

      } else {

          // Ensure parameters are defined
          var x = (x == undefined) ? 1 : parseFloat(x);
          var y = (y == undefined) ? 1 : parseFloat(y);

          if (y == 0) return 'ERROR';

      }

      var val = (x / y);

      // Ensure decimals are rounded to 2 d.p only if necessary 

      return +(Math.round(val + "e+2")  + "e-2");

    }

    function calc(operation, x, y) {

        switch (operation) {

            case 'sum' : return sum (x, y);

            break;

            case 'difference' : return difference (x, y);

            break;

            case 'product' : return product (x, y);

            break;

            case 'quotient' : return product (x, y);

            break;

            default : return 'Unknown Operation';

        }

    }

    // ==================================================
    // DEFINE AND EXECUTE TEST CASES
    // ==================================================
    try {
      // --------------------------------------------------
      // Test Case 1
      // --------------------------------------------------
      // It should return the correct sum when the user provides: 'add', 1, 1.
      var result = calc('sum', 1, 1);

      if (result !== 2) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);

      // --------------------------------------------------
      // Test Case 2
      // --------------------------------------------------
      // It should return the correct difference when the user provides: 'subtract', 20, 10. 
      var result = calc('difference', 20, 10);

      if (result !== 10) throw new Error('Expected calc("difference", 20, 10) to be 10. Received: ' + result);


      // --------------------------------------------------
      // Test Case 3
      // --------------------------------------------------
      // It should return the correct product when the user provides: 'multiply', 9, 9.

      var result = calc('product', 9, 9);

      if (result !== 81) throw new Error('Expected calc("product", 9, 9) to be 81. Received: ' + result);


      // --------------------------------------------------
      // Test Case 4
      // --------------------------------------------------
      // It should return the correct quotient when the user provides: 'divide', 9, 3.

      // --------------------------------------------------
      // Test Case 5
      // --------------------------------------------------
      // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.

      console.log('All tests passed successfully.');

    // ==================================================
    // PRINT ERRORS
    // ==================================================
    } catch (e) {
      console.warn('Whoops, the following test did not pass:');
      console.error(e.message);
    }
