## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Run with Docker

Build image

```bash
docker build -t payable .
```

Run container

```bash
docker run -p 3000:3000 payable
```

## Deployed preview

[deployment](https://payable-liard.vercel.app/)
