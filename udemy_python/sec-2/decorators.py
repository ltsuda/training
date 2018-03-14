import functools

def my_decorator(func):
    @functools.wraps(func)
    def function_runs_fun():
        print("In the decorator")
        func()
        print("After the decorator")
    return function_runs_fun
    
@my_decorator
def my_function():
    print("I'm the function")

#my_function()

###################
def decorator_args(number):
    def my_decorator(func):
        @functools.wraps(func)
        def function_runs_fun(*args, **kwargs):
            print("In the decorator")
            if number == 56:
                print("Not running the func")
            else:
                func(*args, **kwargs)
            print("After the decorator")
        return function_runs_fun
    return my_decorator

@decorator_args(561)
def my_func(x, y):
    print(x + y)

my_func(55, 11)