# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=20.15.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}

WORKDIR /KigaluXe_app/

COPY public/ /KigaluXe_app/public
COPY src/ /KigaluXe_app/src
COPY package.json /KigaluXe_app/

RUN yarn

CMD yarn start
