#!/bin/bash

dist_dir=./dist
bucket=jreut.com

aws --profile personal s3 sync \
  --delete \
  --exclude '.*' \
  --exclude '.*/**' \
"$dist_dir" s3://"$bucket"
