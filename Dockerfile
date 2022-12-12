FROM node:10-alpine as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM node:10-alpine
RUN npm i -g serve
WORKDIR /app
COPY --from=build /app/build .
CMD ["serve", "-p", "7000", "-s", "."]