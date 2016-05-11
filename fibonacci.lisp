
(defun fib (limit)
  (do* ((last 1 current)
        (current 1 next)
        (next 1 (+ current last))
        (res '(0) (nconc res (list current))))
     ((> next limit) res))
)

(dolist (x (fib 1000))
  (format T "~d " x))