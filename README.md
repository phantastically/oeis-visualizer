# oeis-visualizer

## Introduction

Sequences like the natural numbers (0, 1, 2, 3, ...) and the primes (2, 3, 5, 7, 11, ...) are familiar to just about anyone who took a high school mathematics class. How about weird numbers (those that are abundant but not pseudoperfect): 70, 836, 4030, 5830, 7192, ...? Smith numbers (for which the sum of a number's digits equal the sum of the digits of its prime factorization): 4, 22, 27, 58, 85, ...?

The On-Line Encyclopedia of Integer Sequences ([http://www.oeis.org](http://www.oeis.org)) is a long-running and valuable resource for mathematicians that serves as a database for these sequences. As of February 27, 2018, the Encyclopedia contains almost 300,000 entries.

Mathematicians (and more specifically, those specializing in number theory) learn about the relationships between numbers by studying these sequences.


## Project goal

The goal of this visualizer is to display integer sequences using various methods. At present, only a table is used; however linear and logarithmic graphs will also be generated.

While I expect number theorists have extracted every bit of information possible from these sequences as they stand, some part of me hopes that new patterns can be gleaned from these numbers through new visualizations.

This effort has been undertaken towards my attempt to learn the D3 framework through some (questionably) useful complete projects.


## Components

The current project is built of a main `index.html` which contains the appropriate containing elements. JQuery is used to enable some routine page interactions. 

The D3 library is used to render the visualizations.


## Disclaimer

I am not a number theorist and will never be a number theorist. I only hold a passing interest in number theory and recreational mathematics.

This project is not affiliated with the On-Line Encyclopedia of Integer Sequences in any way, and is not to be used for mathematical research until exhaustive testing has been completed.