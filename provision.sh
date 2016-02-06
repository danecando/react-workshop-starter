#!/usr/bin/env bash
#
# Vagrant shell provision
#

# Ignore stdin error
sed -i 's/^mesg n$/tty -s \&\& mesg n/g' /root/.profile

# Replace shell with bash so we can source files
rm /bin/sh && ln -s /bin/bash /bin/sh

# Set debconf to run non-interactively
echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Install base dependencies
apt-get update && apt-get install -y -q --no-install-recommends \
        g++ \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        python \
        rsync \
        software-properties-common \
        wget \
    && rm -rf /var/lib/apt/lists/*

export APP_DIR=/vagrant
export NVM_DIR=/home/vagrant/.nvm
NODE_VERSION=0.12.9

# Install nvm with node and npm
curl https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile

source /home/vagrant/.profile

nvm install $NODE_VERSION && nvm alias default $NODE_VERSION

cd /vagrant && npm install
