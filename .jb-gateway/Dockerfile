FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
ENV LC_ALL=C.UTF-8


RUN apt-get update && apt-get install -y apt-utils apt-transport-https
RUN apt-get install -y \
  # Utilities \
  curl unzip wget software-properties-common socat man-db gnupg2 pass lsof gpg dirmngr gawk \
  # VCS \
  git \
  # Docker
  docker docker-compose \
  && rm -rf /var/lib/apt/lists/*

ENV PATH /root/.asdf/bin:/root/.asdf/shims:$PATH

ENV NODEJS_CHECK_SIGNATURES no

RUN mkdir -p /root/.asdf \
    && git clone https://github.com/asdf-vm/asdf.git /root/.asdf --branch v0.8.1 \
    && asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git \
    && asdf install nodejs latest \
    && echo '. /root/.asdf/asdf.sh' >> /root/.bashrc \
    && rm -rf /tmp/*

