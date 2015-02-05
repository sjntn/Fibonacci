function Fibonacci(){
    self = this;
    this.previous = 1;
    this.next     = 2;

    this._get_previous = function(){
        return self.previous
    }

    this._get_next = function(){
        return self.next
    }

    this.main = function(){
        out = self._get_previous() + self._get_next()
        self.previous = self._get_next()
        self.next     = out
        return out
    }
}

var F   = new Fibonacci();
arr = new Array();
console.log( F.previous )
while( F.next < 1000){
    F.main()
    console.log( F.previous )
}
