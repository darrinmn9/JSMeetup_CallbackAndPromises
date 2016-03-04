
var api = (function() {

    // private area


    return {
        /**
         * the sum of the values in the array, beginning at position start
         *   and ending (and including) position end. ideally, this method
         *   would be private but i cannot find a good way for clients to
         *   perform this responsibility short of providing this function
         *   for their use.
         */
        sumFunction: function(array, start, end) {

            var sum = 0;

            for (var summingPosition = start; summingPosition <= end; summingPosition++) {

                sum += array[summingPosition];
            }

            return sum;
        },

        process: function(arr) {

            if (arr.length === 0) {
                return arr;
            } else {
                var greatestSum = arr[0];
                var greatestSumBoundary = {};
                greatestSumBoundary.lowerIndex = 0;
                greatestSumBoundary.upperIndex = 1;
                var initialPosition = 0;
                var terminalPosition = 0;
                var sum = 0;

                for (terminalPosition = 0; terminalPosition < arr.length; terminalPosition++) {

                    for (initialPosition = 0; initialPosition <= terminalPosition; initialPosition++) {

                        sum = this.sumFunction(arr, initialPosition, terminalPosition);

                        if (sum > greatestSum) {
                            greatestSum = sum;
                            greatestSumBoundary.lowerIndex = initialPosition;
                            greatestSumBoundary.upperIndex = 1 + terminalPosition;
                            // translation from inclusive (terminalPosition)
                            //   to exclusive (greatestSumBoundary.upperIndex)
                        }
                    }
                }

                return arr.slice(greatestSumBoundary.lowerIndex, greatestSumBoundary.upperIndex);
            }
        }
    };
}());
