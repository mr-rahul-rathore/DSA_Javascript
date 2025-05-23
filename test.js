
      let array1 = [3, 6, 2, 45, 34, 87, 45];
      let array2 = [8, 99, 34, 65];

      array1.sort((a, b) => a - b); // Sort array1
      array2.sort((a, b) => a - b); // Sort array2

      let array3 = [];
      let a1 = 0,
        a2 = 0,
        a3 = 0;

      while (a1 < array1.length && a2 < array2.length) {
        if (array1[a1] < array2[a2]) {
          array3[a3++] = array1[a1++];
        } else {
          array3[a3++] = array2[a2++];
        }
      }

      while (a1 < array1.length) {
        array3[a3++] = array1[a1++];
      }

      while (a2 < array2.length) {
        array3[a3++] = array2[a2++];
      }

      console.log("Sorted merged array3:", array3);
    