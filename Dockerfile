FROM node:alpine as build

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM node:alpine
COPY --from=build /app/.output /app/dist
WORKDIR /app/dist
EXPOSE 3000
CMD ["node", "server/index.mjs"]