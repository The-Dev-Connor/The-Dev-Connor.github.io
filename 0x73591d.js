var quotes = [
    "Programmer: A machine that turns coffee into code.",
    "Computers are fast; programmers keep it slow.",
    "When I wrote this code, only God and I understood what I did. Now only God knows.",
    "A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch it!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Programming is like sex: One mistake and you have to pay for it for the rest of your days.",
    "Programming can be fun, and so can cryptography; however, they should not be combined.",
    "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    "Copy-and-Paste was programmed by programmers for programmers actually.",
    "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    "Without requirements or design, programming is the art of adding bugs to an empty text file.",
    "Before software can be reusable it first has to be usable.",
    "The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.",
    "I think Microsoft named .NET so it wouldn't show up in a Unix directory listing.",
    "There are two ways to write error-free programs; only the third one works.",
    "Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development.",
    "Deleted code is debugged code.",
    "Walking on water and developing software from a specification are easy if both are frozen.",
    "It's not a bug - it's an undocumented feature.",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program. The rest of them will write Brainfuck.",
    "Perl - The only language that looks the same before and after RSA encryption.",
    "Java is to JavaScript what car is to carpet.",
    "PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals.",
    "Ruby is rubbish! PHP is phpantastic!",
    "Python is an anagram ",
    "Why do Java programmers have to wear glasses? Because they don't C#.",
    "Why do C# and Java developers keep breaking their keyboards? Because they use a strongly typed language.",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",
    "A SQL query goes into a bar, walks up to two tables and asks, 'Can I join you?'",
    "There are 10 kinds of people in this world: those who understand binary, and those who don't.",
    "There are 3 kinds of lies: Lies, damned lies, and benchmarks.",
    "A programmer had a problem. He thought to himself, 'I know, I'll solve it with threads!' has Now problems. two he",
    "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
    "A programmer's wife tells him, 'Go to the store and buy a loaf of bread. If they have eggs, get a dozen.' He returns with 12 loaves of bread.",
    "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    "A program is never less than 90% complete and never more than 95% complete.",
    "I've finally learned what upward compatible means. It means we get to keep all our old mistakes.",
    "The best thing about a Boolean is that even if you are wrong, you are only off by a bit.",
    "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
];

var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];


document.getElementById("qotd").innerHTML = (randomQuote);