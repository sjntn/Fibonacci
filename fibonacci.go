package main

import "fmt"

func fibonacci() func(int) int{
   sum_n_2 := 0
   sum_n_1 := 1
   sum := 0
   return func(x int) int {
      sum     = sum_n_1 + sum_n_2
      sum_n_2 = sum_n_1
      sum_n_1 = sum
      return sum
   }
}

func main() {
    f    := fibonacci()
    out  := 0
    i    :=0
    for out < 1000 {
        fmt.Print(out, " ")
        out = f(i)
        i++;
    }
	fmt.Print("\n")
}
