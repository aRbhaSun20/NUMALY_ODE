# NUMALY-ODE
---
It is a simple Pogramming concept using Basic **Javascript** and and **html and css** for creation of a Static Webpage on any given local host

>In this programming section we are gonna solve any given Differential Equation both ``NUMerically and AnaLYtically Ordinary Differential Equation`` hence NUMALY-ODE

---

> ##  Differential Equation :
> A **differential equation** is a *mathematical equation* that relates some function with its derivatives. In applications, the functions usually represent ***physical quantities***, the derivatives represent their rates of change, and the differential equation defines a relationship between the two.

 Differential equations can be divided into several types.Commonly used distinctions include whether the equation is: **Ordinary/Partial, Linear/Non-linear, and Homogeneous/heterogeneous**

>Differential equations first came into existence with the invention of calculus by Newton and Leibniz.

---

## 1. Ordinary differential equations:
An **ordinary differential equation (ODE)** is an equation containing an unknown function of one real or complex variable x, its derivatives, and some given functions of x. The unknown function is generally represented by a variable (often denoted y), which, therefore, depends on x. Thus x is often called the independent variable of the equation. The term "ordinary" is used in contrast with the term partial differential equation, which may be with respect to more than one independent variable.

Linear differential equations are the differential equations that are linear in the unknown function and its derivatives.

---

## 2. Partial differential equations:
A **partial differential equation (PDE)** is a differential equation that contains unknown multivariable functions and their partial derivatives. (This is in contrast to ordinary differential equations, which deal with functions of a single variable and their derivatives.) PDEs are used to formulate problems involving functions of several variables, and are either solved in closed form, or used to create a relevant computer model.

---

## 3. Non-linear differential equations:
A **non-linear differential equation** is a differential equation that is not a linear equation in the unknown function and its derivatives (the linearity or non-linearity in the arguments of the function are not considered here). There are very few methods of solving nonlinear differential equations exactly; those that are known typically depend on the equation having particular symmetries. Nonlinear differential equations can exhibit very complicated behavior over extended time intervals, characteristic of chaos. Even the fundamental questions of existence, uniqueness, and extendability of solutions for nonlinear differential equations, and well-posedness of initial and boundary value problems for nonlinear PDEs are hard problems and their resolution in special cases is considered to be a significant advance in the mathematical theory (cf. Navier–Stokes existence and smoothness).

---

> ### Equation order:
>Differential equations are described by their order, determined by the term with the highest derivatives. An equation containing only first derivatives is a first-order differential equation, an equation containing the second derivative is a second-order differential equation, and so on

##### Examples:
 In the first group of examples, u is an unknown function of x, and c and ω are constants that are supposed to be known. Two broad classifications of both ordinary and partial differential equations consists of distinguishing between linear and nonlinear differential equations, and between homogeneous differential equations and heterogeneous ones.

 heterogeneous first-order linear constant coefficient ordinary differential equation:
${\displaystyle {\frac {du}{dx}}=cu+x^{2}.}{\frac {du}{dx}}=cu+x^{2}$

Homogeneous second-order linear ordinary differential equation:
${\displaystyle {\frac {d^{2}u}{dx^{2}}}-x{\frac {du}{dx}}+u=0.}{\frac {d^{2}u}{dx^{2}}}-x{\frac {du}{dx}}+u=0$

Homogeneous second-order linear constant coefficient ordinary differential equation describing the harmonic oscillator:
${\displaystyle {\frac {d^{2}u}{dx^{2}}}+\omega ^{2}u=0.}{\frac {d^{2}u}{dx^{2}}}+\omega ^{2}u=0$

heterogeneous first-order nonlinear ordinary differential equation:
${\displaystyle {\frac {du}{dx}}=u^{2}+4.}{\frac {du}{dx}}=u^{2}+4$

Second-order nonlinear (due to sine function) ordinary differential equation describing the motion of a pendulum of length L:
${\displaystyle L{\frac {d^{2}u}{dx^{2}}}+g\sin u=0.}L{\frac {d^{2}u}{dx^{2}}}+g\sin u=0$

In the next group of examples, the unknown function u depends on two variables x and t or x and y.

Homogeneous first-order linear partial differential equation:
${\displaystyle {\frac {\partial u}{\partial t}}+t{\frac {\partial u}{\partial x}}=0.}{\frac {\partial u}{\partial t}}+t{\frac {\partial u}{\partial x}}=0$

Homogeneous second-order linear constant coefficient partial differential equation of elliptic type, the Laplace equation:
${\displaystyle {\frac {\partial ^{2}u}{\partial x^{2}}}+{\frac {\partial ^{2}u}{\partial y^{2}}}=0.}{\frac {\partial ^{2}u}{\partial x^{2}}}+{\frac {\partial ^{2}u}{\partial y^{2}}}=0$

Homogeneous third-order non-linear partial differential equation :
${\displaystyle {\frac {\partial u}{\partial t}}=6u{\frac {\partial u}{\partial x}}-{\frac {\partial ^{3}u}{\partial x^{3}}}.}{\frac {\partial u}{\partial t}}=6u{\frac {\partial u}{\partial x}}-{\frac {\partial ^{3}u}{\partial x^{3}}}$

---

#### Existence of solutions
>Solving differential equations is not like solving algebraic equations. Not only are their solutions often unclear, but whether solutions are unique or exist at all are also notable subjects of interest.

For first order initial value problems, the Peano existence theorem gives one set of circumstances in which a solution exists. Given any point  ${\displaystyle (a,b)}$in the xy-plane, define some rectangular region ${\displaystyle Z}$, such that ${\displaystyle Z=[l,m]\times [n,p]}$ and ${\displaystyle (a,b)}$ is in the interior of ${\displaystyle Z}$. If we are given a differential equation ${\displaystyle {\frac {\mathrm {d} y}{\mathrm {d} x}}=g(x,y)}{\frac {\mathrm {d} y}{\mathrm {d} x}}$=g(x,y) and the condition that ${\displaystyle y=b}$y=b when ${\displaystyle x=a}$x=a, then there is locally a solution to this problem if ${\displaystyle g(x,y)}$g(x,y) and ${\displaystyle {\frac {\partial g}{\partial x}}}{\frac {\partial g}{\partial x}}$ are both continuous on ${\displaystyle Z}$. This solution exists on some interval with its center at ${\displaystyle a}$. The solution may not be unique.

However, this only helps us with first order initial value problems. Suppose we had a linear initial value problem of the nth order:

${\displaystyle f_{n}(x){\frac {\mathrm {d} ^{n}y}{\mathrm {d} x^{n}}}+\cdots +f_{1}(x){\frac {\mathrm {d} y}{\mathrm {d} x}}+f_{0}(x)y=g(x)}f_{n}(x){\frac {\mathrm {d} ^{n}y}{\mathrm {d} x^{n}}}+\cdots +f_{1}(x){\frac {\mathrm {d} y}{\mathrm {d} x}+f_{0}(x)}y$=g(x)
such that

${\displaystyle y(x_{0})=y_{0},y'(x_{0})=y'_{0},y''(x_{0})=y''_{0},\cdots }y(x_{0})=y_{0},y'(x_{0})=y'_{0},y''(x_{0})=y''_{0}$ 
For any nonzero ${\displaystyle f_{n}(x)}f_{{n}}(x), if {\displaystyle \{f_{0},f_{1},\cdots \}}\{f_{0},f_{1},\cdots \}$ and ${\displaystyle g}$ are continuous on some interval containing ${\displaystyle x_{0}}x_{0}$, ${\displaystyle y}$ is unique and exists

---

>  Here we are comparing both Analytical Method and Numerical Method i.e using 4 methods Namely
>   -    RUNGE-KUTTA METHOD
> -   MODIFIED EULER'S METHOD
> -  MILNE'S METHOD
> -  ADAMS-BASHFORTH METHOD

---

#### 1.  RUNGE-KUTTA METHOD

Let an initial value problem be specified as follows:

${\displaystyle {\dot {y}}=f(t,y),\quad y(t_{0})=y_{0}.}{\dot {y}}=f(t,y),\quad y(t_{0})=y_{0}$.
Here ${\displaystyle y}$ is an unknown function (scalar or vector) of time ${\displaystyle t}$, which we would like to approximate; we are told that ${\displaystyle {\dot {y}}}{\dot {y}}$, the rate at which ${\displaystyle y}$ changes, is a function of ${\displaystyle t}$ and of ${\displaystyle y}$ itself. At the initial time {\displaystyle t_{0}}t_{0} the corresponding ${\displaystyle y}$vvalue is ${\displaystyle y_{0}}y_{0}$. The function ${\displaystyle f}$ and the data ${\displaystyle t_{0}}t_{0}$, ${\displaystyle y_{0}}y_{0}$ are given.

Now pick a step-size h > 0 and define

${\displaystyle {\begin{aligned}y_{n+1}&=y_{n}+{\tfrac {1}{6}}\left(k_{1}+2k_{2}+2k_{3}+k_{4}\right),\\t_{n+1}&=t_{n}+h\\\end{aligned}}}$${\displaystyle {\begin{aligned}y_{n+1}&=y_{n}+{\tfrac {1}{6}}\left(k_{1}+2k_{2}+2k_{3}+k_{4}\right),\\t_{n+1}&=t_{n}+h\\\end{aligned}}}$
for n = 0, 1, 2, 3, ...,                                    using[2]

${\displaystyle {\begin{aligned}k_{1}&=h\ f(t_{n},y_{n}),\\k_{2}&=h\ f\left(t_{n}+{\frac {h}{2}},y_{n}+{\frac {k_{1}}{2}}\right),\\k_{3}&=h\ f\left(t_{n}+{\frac {h}{2}},y_{n}+{\frac {k_{2}}{2}}\right),\\k_{4}&=h\ f\left(t_{n}+h,y_{n}+k_{3}\right).\end{aligned}}}$${\displaystyle {\begin{aligned}k_{1}&=h\ f(t_{n},y_{n}),\\k_{2}&=h\ f\left(t_{n}+{\frac {h}{2}},y_{n}+{\frac {k_{1}}{2}}\right),\\k_{3}&=h\ f\left(t_{n}+{\frac {h}{2}},y_{n}+{\frac {k_{2}}{2}}\right),\\k_{4}&=h\ f\left(t_{n}+h,y_{n}+k_{3}\right).\end{aligned}}}$
(Note: the above equations have different but equivalent definitions in different texts).[3]
Here ${\displaystyle y_{n+1}}y_{n+1}$ is the RK4 approximation of ${\displaystyle y(t_{n+1})}y(t_{n+1})$, and the next value $({\displaystyle y_{n+1}}y_{n+1})$ is determined by the present value $({\displaystyle y_{n}}y_{n})$ plus the weighted average of four increments, where each increment is the product of the size of the interval, h, and an estimated slope specified by function f on the right-hand side of the differential equation.

${\displaystyle k_{1}}k_{1}$ is the increment based on the slope at the beginning of the interval, using {\displaystyle y}y (Euler's method);
${\displaystyle k_{2}}k_{2}$ is the increment based on the slope at the midpoint of the interval, using ${\displaystyle y}$ and ${\displaystyle k_{1}}$;
${\displaystyle k_{3}}$ is again the increment based on the slope at the midpoint, but now using ${\displaystyle y}$ and ${\displaystyle k_{2}}k_{2}$;
${\displaystyle k_{4}}k_{4}$ is the increment based on the slope at the end of the interval, using ${\displaystyle y}$ and ${\displaystyle k_{3}}k_{3}$.
In averaging the four increments, greater weight is given to the increments at the midpoint.

---

#### 2.  MODIFIED EULER'S METHOD
A simple modification of the Euler method which eliminates the stability problems noted in the previous section is the backward Euler method:

${\displaystyle y_{n+1}=y_{n}+hf(t_{n+1},y_{n+1}).}y_{n+1}=y_{n}+hf(t_{n+1},y_{n+1})$.
This differs from the (standard, or forward) Euler method in that the function ${\displaystyle f}$ is evaluated at the end point of the step, instead of the starting point. The backward Euler method is an implicit method, meaning that the formula for the backward Euler method has ${\displaystyle y_{n+1}}y_{n+1}$ on both sides, so when applying the backward Euler method we have to solve an equation. This makes the implementation more costly.

Other modifications of the Euler method that help with stability yield the exponential Euler method or the semi-implicit Euler method.

More complicated methods can achieve a higher order (and more accuracy). One possibility is to use more function evaluations. This is illustrated by the midpoint method which is already mentioned in this article:

${\displaystyle y_{n+1}=y_{n}+hf{\Big (}t_{n}+{\tfrac {1}{2}}h,y_{n}+{\tfrac {1}{2}}hf(t_{n},y_{n}){\Big )}}{\displaystyle y_{n+1}=y_{n}+hf{\Big (}t_{n}+{\tfrac {1}{2}}h,y_{n}+{\tfrac {1}{2}}hf(t_{n},y_{n}){\Big )}}$.
This leads to the family of Runge–Kutta methods.

The other possibility is to use more past values, as illustrated by the two-step Adams–Bashforth method:

${\displaystyle y_{n+1}=y_{n}+{\tfrac {3}{2}}hf(t_{n},y_{n})-{\tfrac {1}{2}}hf(t_{n-1},y_{n-1}).}y_{n+1}=y_{n}+{\tfrac {3}{2}}hf(t_{n},y_{n})-{\tfrac {1}{2}}hf(t_{n-1},y_{n-1})$.
This leads to the family of linear multistep methods. There are other modifications which uses techniques from compressive sensing to minimize memory usage.

---

#### 3.  MILNE'S METHOD
> Also called Predictor–corrector method

In numerical analysis, predictor–corrector methods belong to a class of algorithms designed to integrate ordinary differential equations – to find an unknown function that satisfies a given differential equation. All such algorithms proceed in two steps:

The initial, "prediction" step, starts from a function fitted to the function-values and derivative-values at a preceding set of points to extrapolate ("anticipate") this function's value at a subsequent, new point.
The next, "corrector" step refines the initial approximation by using the predicted value of the function and another method to interpolate that unknown function's value at the same subsequent point.

##### PEC mode and PECE mode
There are different variants of a predictor–corrector method, depending on how often the corrector method is applied. The Predict–Evaluate–Correct–Evaluate (PECE) mode refers to the variant in the above example:

${\displaystyle {\begin{aligned}{\tilde {y}}_{i+1}&=y_{i}+hf(t_{i},y_{i}),\\y_{i+1}&=y_{i}+{\tfrac {1}{2}}h{\bigl (}f(t_{i},y_{i})+f(t_{i+1},{\tilde {y}}_{i+1}){\bigr )}.\end{aligned}}}$ 
It is also possible to evaluate the function f only once per step by using the method in Predict–Evaluate–Correct (PEC) mode:

${\displaystyle {\begin{aligned}{\tilde {y}}_{i+1}&=y_{i}+hf(t_{i},{\tilde {y}}_{i}),\\y_{i+1}&=y_{i}+{\tfrac {1}{2}}h{\bigl (}f(t_{i},{\tilde {y}}_{i})+f(t_{i+1},{\tilde {y}}_{i+1}){\bigr )}.\end{aligned}}}$ 
Additionally, the corrector step can be repeated in the hope that this achieves an even better approximation to the true solution. If the corrector method is run twice, this yields the PECECE mode:

${\displaystyle {\begin{aligned}{\tilde {y}}_{i+1}&=y_{i}+hf(t_{i},y_{i}),\\{\hat {y}}_{i+1}&=y_{i}+{\tfrac {1}{2}}h{\bigl (}f(t_{i},y_{i})+f(t_{i+1},{\tilde {y}}_{i+1}){\bigr )},\\y_{i+1}&=y_{i}+{\tfrac {1}{2}}h{\bigl (}f(t_{i},y_{i})+f(t_{i+1},{\hat {y}}_{i+1}){\bigr )}.\end{aligned}}}$${\displaystyle {\begin{aligned}{\tilde {y}}_{i+1}&=y_{i}+hf(t_{i},y_{i}),\\{\hat {y}}_{i+1}&=y_{i}+{\tfrac {1}{2}}h{\bigl (}f(t_{i},y_{i})+f(t_{i+1},{\tilde {y}}_{i+1}){\bigr )},\\y_{i+1}&=y_{i}+{\tfrac {1}{2}}h{\bigl (}f(t_{i},y_{i})+f(t_{i+1},{\hat {y}}_{i+1}){\bigr )}.\end{aligned}}}$
The PECEC mode has one fewer function evaluation. More generally, if the corrector is run k times, the method is in P(EC)k or P(EC)kE mode. If the corrector method is iterated until it converges, this could be called PE(CE)∞.

---

#### 4.  ADAMS-BASHFORTH METHOD
> Also called Linear multistep method

The Adams–Bashforth methods are explicit methods. The coefficients are ${\displaystyle a_{s-1}=-1}a_{{s-1}}$=-1 and ${\displaystyle a_{s-2}=\cdots =a_{0}=0}a_{{s-2}}=\cdots =a_{0}$=0, while the ${\displaystyle b_{j}}b_{j}$ are chosen such that the methods have order s (this determines the methods uniquely).

The Adams–Bashforth methods with s = 1, 2, 3, 4, 5 are (Hairer, Nørsett & Wanner 1993, §III.1; Butcher 2003, p. 103):

${\displaystyle {\begin{aligned}y_{n+1}&=y_{n}+hf(t_{n},y_{n}),\qquad {\text{(This is the Euler method)}}\\y_{n+2}&=y_{n+1}+h\left({\frac {3}{2}}f(t_{n+1},y_{n+1})-{\frac {1}{2}}f(t_{n},y_{n})\right),\\y_{n+3}&=y_{n+2}+h\left({\frac {23}{12}}f(t_{n+2},y_{n+2})-{\frac {16}{12}}f(t_{n+1},y_{n+1})+{\frac {5}{12}}f(t_{n},y_{n})\right),\\y_{n+4}&=y_{n+3}+h\left({\frac {55}{24}}f(t_{n+3},y_{n+3})-{\frac {59}{24}}f(t_{n+2},y_{n+2})+{\frac {37}{24}}f(t_{n+1},y_{n+1})-{\frac {9}{24}}f(t_{n},y_{n})\right),\\y_{n+5}&=y_{n+4}+h\left({\frac {1901}{720}}f(t_{n+4},y_{n+4})-{\frac {2774}{720}}f(t_{n+3},y_{n+3})+{\frac {2616}{720}}f(t_{n+2},y_{n+2})-{\frac {1274}{720}}f(t_{n+1},y_{n+1})+{\frac {251}{720}}f(t_{n},y_{n})\right).\end{aligned}}}$${\displaystyle {\begin{aligned}y_{n+1}&=y_{n}+hf(t_{n},y_{n}),\qquad {\text{(This is the Euler method)}}\\y_{n+2}&=y_{n+1}+h\left({\frac {3}{2}}f(t_{n+1},y_{n+1})-{\frac {1}{2}}f(t_{n},y_{n})\right),\\y_{n+3}&=y_{n+2}+h\left({\frac {23}{12}}f(t_{n+2},y_{n+2})-{\frac {16}{12}}f(t_{n+1},y_{n+1})+{\frac {5}{12}}f(t_{n},y_{n})\right),\\y_{n+4}&=y_{n+3}+h\left({\frac {55}{24}}f(t_{n+3},y_{n+3})-{\frac {59}{24}}f(t_{n+2},y_{n+2})+{\frac {37}{24}}f(t_{n+1},y_{n+1})-{\frac {9}{24}}f(t_{n},y_{n})\right),\\y_{n+5}&=y_{n+4}+h\left({\frac {1901}{720}}f(t_{n+4},y_{n+4})-{\frac {2774}{720}}f(t_{n+3},y_{n+3})+{\frac {2616}{720}}f(t_{n+2},y_{n+2})-{\frac {1274}{720}}f(t_{n+1},y_{n+1})+{\frac {251}{720}}f(t_{n},y_{n})\right).\end{aligned}}}$
The coefficients ${\displaystyle b_{j}}b_{j}$ can be determined as follows. Use polynomial interpolation to find the polynomial p of degree ${\displaystyle s-1}$ such that

${\displaystyle p(t_{n+i})=f(t_{n+i},y_{n+i}),\qquad {\text{for }}i=0,\ldots ,s-1.} p(t_{n+i}) = f(t_{n+i}, y_{n+i}), \qquad \text{for } i=0,\ldots,s-1$. 
The Lagrange formula for polynomial interpolation yields

${\displaystyle p(t)=\sum _{j=0}^{s-1}{\frac {(-1)^{s-j-1}f(t_{n+j},y_{n+j})}{j!(s-j-1)!h^{s-1}}}\prod _{i=0 \atop i\neq j}^{s-1}(t-t_{n+i}).} p(t) = \sum_{j=0}^{s-1} \frac{(-1)^{s-j-1}f(t_{n+j}, y_{n+j})}{j!(s-j-1)!h^{s-1}} \prod_{i=0 \atop i\ne j}^{s-1} (t-t_{n+i})$. 
The polynomial p is locally a good approximation of the right-hand side of the differential equation ${\displaystyle y'=f(t,y)} y' = f(t,y)$  that is to be solved, so consider the equation ${\displaystyle y'=p(t)}y'=p(t)$ instead. This equation can be solved exactly; the solution is simply the integral of p. This suggests taking

${\displaystyle y_{n+s}=y_{n+s-1}+\int _{t_{n+s-1}}^{t_{n+s}}p(t)\,dt.} y_{n+s} = y_{n+s-1} + \int_{t_{n+s-1}}^{t_{n+s}} p(t)\,dt. $
The Adams–Bashforth method arises when the formula for p is substituted. The coefficients ${\displaystyle b_{j}}b_{j}$ turn out to be given by

${\displaystyle b_{s-j-1}={\frac {(-1)^{j}}{j!(s-j-1)!}}\int _{0}^{1}\prod _{i=0 \atop i\neq j}^{s-1}(u+i)\,du,\qquad {\text{for }}j=0,\ldots ,s-1.} b_{s-j-1} = \frac{(-1)^j}{j!(s-j-1)!} \int_0^1 \prod_{i=0 \atop i\ne j}^{s-1} (u+i) \,du, \qquad \text{for } j=0,\ldots,s-1$. 
Replacing ${\displaystyle f(t,y)}f(t,y)$by its interpolant p incurs an error of order hs, and it follows that the s-step Adams–Bashforth method has indeed order s (Iserles 1996, §2.1)

The Adams–Bashforth methods were designed by John Couch Adams to solve a differential equation modelling capillary action due to Francis Bashforth. Bashforth (1883) published his theory and Adams' numerical method (Goldstine 1977).

>Hence these are used for solving the given Differntial Equations for Solving by using the following above Definitions both by Analytically and Numerically.

---
---