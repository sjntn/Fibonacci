#! python
# coding:utf-8
class Fibonacci():
    previous = 0
    next     = 1

    def _get_previous(self):
        return self.previous

    def _get_next(self):
        return self.next

    def main(self):
        out = self._get_previous() + self._get_next()
        self.previous = self._get_next()
        self.next     = out
        return out

if __name__ == '__main__':
    F   = Fibonacci()
    out = 0;
    while(out < 1000):
        print(out)
        out = F.main()
