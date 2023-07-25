#!/usr/bin/env bash

# TODO yeah maybe let's make something more robust and futur proof
files=("./dist/react-simple-dialogs.es.js" "./dist/react-simple-dialogs.umd.js")

for f in ${files[*]}; do
  echo "'use client';"|cat - ${f} > /tmp/out && mv /tmp/out ${f}
done