def my_method(arg1, arg2):
    return arg1 * arg2

my_method(5, 6)

def my_long_method(arg1, arg2, arg3, arg4, arg5):
    return arg1 + arg2 + arg3 + arg4 + arg5

#####

def add_simplified(*args):
    return sum(args)

add_simplified(5, 2, 1, 10 ,20)

##

def kwargs_method(*args, **kwargs):
    print(args)
    print(kwargs)

kwargs_method(12, 34, 55, name="Jose", location="UK")