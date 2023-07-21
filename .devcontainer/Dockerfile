FROM mcr.microsoft.com/devcontainers/typescript-node:16-bullseye

USER node
RUN YARN_CACHE="$(yarn cache dir)" && rm -rf "$YARN_CACHE" && ln -s /vscode-dev/yarn-cache "$YARN_CACHE"

USER root
CMD chown node:node /test && sudo -u node mkdir -p /test/yarn-cache && sleep inf
