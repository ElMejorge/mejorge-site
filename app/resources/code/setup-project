#!/bin/bash

# Check that bucket argument is passed
if [ -z $1 ]
then
	echo "Please supply a project name as argument"
	exit
fi

# Set variables
BUCKET=s3://$1
DIR=$HOME/Projects/$1

# Prepare s3 bucket
echo "Preparing s3 bucket"

aws s3 rb $BUCKET --force 2> /dev/null #ignore error message if bucket does not exist. --force to delete also objects in bucket
aws s3api create-bucket --bucket $1

# Create yeoman project on current dir and build it
echo "Creating project"

yo angular $1
grunt build

# sync project app to aws bucket
aws s3 sync dist $BUCKET --acl public-read

# make bucket a website
echo "Making website"

aws s3api put-bucket-website --bucket $1 --website-configuration "{\"IndexDocument\":{\"Suffix\":\"index.html\"},\"ErrorDocument\":{\"Key\":\"404.html\"}}"
firefox http://$1.s3-website-us-east-1.amazonaws.com/#!/#%2Fabout
