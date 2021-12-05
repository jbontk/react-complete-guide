FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
ENV LC_ALL=C.UTF-8


RUN apt-get update
RUN apt-get install -y git curl gpg dirmngr gawk \
  && rm -rf /var/lib/apt/lists/*

ENV PATH /root/.asdf/bin:/root/.asdf/shims:$PATH

ENV NODEJS_CHECK_SIGNATURES no

RUN /bin/bash -c "rm -rf ~/.asdf && \
                  git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.8.1 && \
                  asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git && \
                  asdf install nodejs latest && \
                  echo '. $HOME/.asdf/asdf.sh' >> ~/.bashrc && \
                  rm -rf /tmp/*"

WORKDIR /mnt/space/work/react-complete-guide

RUN /bin/bash -c "[[ -f ./.tool-versions ]] && asdf install && \
                  rm -rf /tmp/*"
