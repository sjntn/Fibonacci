class Fibonacci
  def initialize
    @array = [1, 1]
  end

  def sum
    while @array[-1] < 1000 do
      @array << @array[-2] + @array[-1]
    end
    @array.delete_at(-1)
  end

  def print
    p @array.join(' ')
  end
end

f = Fibonacci.new()
f.sum
f.print
