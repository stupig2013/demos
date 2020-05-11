print "Hello, Python"

import sys

a = [11, 22]
for a1, a2 in enumerate(a):
    print(a1)
    print(a2)

def aaa(b, *a, **q):
    print(a)
    #print("%s: %s" %(key, value))

#aaa(b=3, value='haha', key='name')



class Base(object):
    def __new__(cls):
        print('base new')
        return super(Base, cls).__new__(cls)

    def a(self):
        print('base a')

class A(Base):
    a1=1

    def get_a2(self):
        return 2

    def __new__(cls):
        print('A new')
        print(cls)
        return super(A, cls).__new__(cls)

    def __init__(self):
        print('A init')

    @classmethod
    def f(cls):
        print(cls)

class B(A):
    def ff(self):
        print('f')

    @classmethod
    def b1(cls):
        cls.f()

A.f()
a = A()
#a.a1 = 2
print(a.a1)
print(a.__dict__)
#a.aa1()
