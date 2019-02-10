Example repository for transcrypt+py-loader+webpack
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This example repository attempts to demonstrate how to generate a js bundle
with webpack based on an entry point in python, using py-loader webpack module.

Getting started
===============

.. code-block::

   git clone https://github.com/jpic/test-transcrypt-webpack.git
   cd test-transcrypt-webpack
   pip install --user -e .
   yarn
   yarn start

However, this will fail with the following error::

   $ yarn start
   yarn run v1.12.3
   $ webpack-cli
   fs.js:120
       throw err;
       ^

   Error: ENOENT: no such file or directory, open '/tmp/test-transcrypt-webpack/./__javascript__/webpack_entry.js'
       at Object.openSync (fs.js:449:3)
       at Object.readFileSync (fs.js:349:35)
       at /tmp/test-transcrypt-webpack/node_modules/py-loader/index.js:100:25
       at /tmp/test-transcrypt-webpack/node_modules/node-cmd/cmd.js:25:21
       at ChildProcess.exithandler (child_process.js:288:7)
       at ChildProcess.emit (events.js:197:13)
       at maybeClose (internal/child_process.js:978:16)
       at Process.ChildProcess._handle.onexit (internal/child_process.js:265:5)
   error Command failed with exit code 1.
   info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

Despite that transcrypt itself seems pretty happy with it::

   $ transcrypt webpack_entry.py

   Transcrypt (TM) Python to JavaScript Small Sane Subset Transpiler Version 3.7.16
   Copyright (C) Geatec Engineering. License: Apache 2.0


   Saving target code in: /home/jpic/src/test-transcrypt-webpack/__target__/org.transcrypt.__runtime__.js
   Saving minified target code in: /home/jpic/src/test-transcrypt-webpack/__target__/org.transcrypt.__runtime__.js
   Saving target code in: /home/jpic/src/test-transcrypt-webpack/__target__/test_transcrypt_webpack.js
   Saving minified target code in: /home/jpic/src/test-transcrypt-webpack/__target__/test_transcrypt_webpack.js
   Saving target code in: /home/jpic/src/test-transcrypt-webpack/__target__/webpack_entry.js
   Saving minified target code in: /home/jpic/src/test-transcrypt-webpack/__target__/webpack_entry.js

   Ready
