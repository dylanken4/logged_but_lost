# logged_but_lost

hypothesis:
    I believe that the script is both posting "80" and NaN is because the function does not return, it uses console.log to say the area.

Ex:
    0.22857142857
AR:
    80
    NaN
Error:
    The functions was outputting to the console instead of returning so that it may be used in the main function
Repair:
    have the function return.

Negative cases:
    If the user has either a negative height or width then it would cause the area to drop to 0 instead of going negative.

Input:
    area(8, 10)
ER:
    0.22857142857142856
AR:
    0.22857142857142856
Pass/Fail?
    Pass

Input:
    area(7, 11)
ER:
    0.22
AR:
    0.22
Pass/Fail?
    Pass

Input:
    area(0, 10)
ER:
    0
AR:
    0
Pass/Fail?
    Pass
