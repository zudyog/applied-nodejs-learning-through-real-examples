extern "C" {
    double moving_average(double *prices, int size) {
        double sum = 0.0;
        for (int i = 0; i < size; i++) {
            sum += prices[i];
        }
        return sum / size;
    }
 }
 