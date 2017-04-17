This PR fixes a bug where the program crashes when trying to display non-ASCII characters.

Before:

```
───────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────
 @minerobber                   │ Finally setting up a Mastodon account. Joy!
2017-04-17 05:38               │
                               │
───────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────
tilde.town @tildetown          │ welcome new users!!!!!!~owen~jasp~paladinjack
2017-04-17 05:05               │
                               │
───────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────
Traceback (most recent call last):
  File "/home/minerobber/misc/programming/venv/bin/toot", line 11, in <module>
    sys.exit(main())
  File "/home/minerobber/misc/programming/venv/local/lib/python2.7/site-packages/toot/console.py", line 378, in main
    run_command(command, args)
  File "/home/minerobber/misc/programming/venv/local/lib/python2.7/site-packages/toot/console.py", line 349, in run_command
    return cmd_timeline(app, user, args)
  File "/home/minerobber/misc/programming/venv/local/lib/python2.7/site-packages/toot/console.py", line 150, in cmd_timeline
    print_timeline(item)
  File "/home/minerobber/misc/programming/venv/local/lib/python2.7/site-packages/toot/console.py", line 118, in print_timeline
    print("{:30} │ {}".format(left, right))
UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-1: ordinal not in range(128)
```

Now:

```
───────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────
MineRobber @minerobber         │ Finally setting up a Mastodon account. Joy!
2017-04-17 05:38               │
                               │
───────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────
tilde.town @tildetown          │ welcome new users!!!!!!~owen~jasp~paladinjack
2017-04-17 05:05               │
                               │
───────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────
杰西 @m455                   │ @tildetown aw shucks
2017-04-17 02:43               │
                               │
───────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────
(ETC.)
```
