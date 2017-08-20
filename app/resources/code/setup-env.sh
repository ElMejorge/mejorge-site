#!/bin/bash

# Install nodejs and npm
echo "Installing with package manager"
sudo pacman -S nodejs npm git

# Install npm packages
echo "Installing npm packages"
sudo npm install -g grunt-cli gulp yo

# Install npm packages
echo "Installing aws (and python3)"
sudo pacman -S python
sudo pip install awscli
