node-spotify-pingpong
=====================

- Download atom-shell at https://github.com/atom/atom-shell/releases
- From the node-spotify-pingpong directory, run:

On Windows:

```cmd
$ .\atom-shell\atom.exe .\
```

On Linux:

```bash
$ ./atom-shell/atom ./
```

On Mac OS X:

```bash
$ ./Atom.app/Contents/MacOS/Atom ./
```

## API Usage


```
GET http://localhost:1337/?ping=[ping code here]
```

The response will be the resulting pong code

e.g

```
GET http://localhost:1337/?ping=12 23 125 43 56 72 56 76 45 34 12 64 127 143 1 2 3 4 5 10

116 189 235 111 47 29 228 95 97 132
```
