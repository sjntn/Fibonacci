#include <stdio.h>

int seq[30] = {0, 1, 2};
int tmp, limit;

int main(void)
{
  for (int i = 3; i <= 30; i++)
  {
    tmp = seq[i-2] + seq[i-1];
    if (1000 <= tmp) {
      limit = i;
      break;
    } else {
      seq[i] = tmp;
    }
  }

  for (int j = 0; j < limit; j++ )
  {
    printf("%d ", seq[j]);
  }

  printf("\n");

  return 0;
}
