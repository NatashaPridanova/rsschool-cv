# Natallia Prydanava #

## About me ##
I'm a language student who apart from Italian is also passionate about programming which has completely changed my way of thinking. It combines both my creativity and logic. I'm doing my best to learn, practice and one day find a job in IT.

## Contact me ##
**Email:** natashapridanova17@gmail.com


**Discord:** natasha.pri


**GitHub:** NatashaPridanova

## Skills ##
* HTML
* CSS
* Core JS
* Git, Github
* Visual Studio Code

## Education ##
- Codecademy Learn HTML(completed)


- Codecademy Learn CSS(completed)


- Codecademy Learn Intermediate CSS(completed)


- Codecademy Learn JavaScript, Learn Intermediate JavaScript(in process)




-JavaScript Front-End Pre-school 2022(completed)


-JS Frontend developer in Rolling Scopes School(in process)

## Languages ##
* Italian - B2
* English - B2  
* Belarusian - Native
* Russian - Native

## Code ##
Problem:


Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
Example ticket:
[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]


To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.


Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

```javascript
function bingo(ticket, win) {
    let counter = 0;
    ticket.forEach((item) => {
        let miniwin = 0;
        for (let i = 0; i < item[0].length; i++) {
            if (item[0].charCodeAt(i) === item[1]) { miniwin = 1 }
        }
        miniwin > 0 ? counter = counter + 1 : counter = counter;
    });
    return (counter >= win ? "Winner!" : "Loser!");
}
```
