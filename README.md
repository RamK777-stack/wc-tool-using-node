This is my solution for build own wc tool challenges coding https://codingchallenges.fyi/challenges/challenge-wc

**Installation:**

1. clone the repo
2. ```npm install```
3. From the root directory of the project run
```npm install -g .``` This will install package globally.
4. Test the CLI by typing the ccwc keyword in the terminal.

**Usage:**

```ccwc --help```

```ccwc test.txt```

It will print
`2 2 11 test.txt` 
newline, word, byte count, file name

Read from standard input if no filename is specified.

```cat test.txt | ccwc```

To verify, we can compare with wc unix tool. 
Open terminal and execute wc test.txt

To read more about wc https://linux.die.net/man/1/wc

Helpful blog: https://dev.to/rushankhan1/build-a-cli-with-node-js-4jbi


