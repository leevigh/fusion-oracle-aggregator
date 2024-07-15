# Fusion. Oracle Aggregator

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Production](#production)

## Introduction

Fusion Oracle Aggregator is an app that fetches price data from Pyth and Switchboard oracles and displays the price averages.

## Features

- Fetch price feed data from Pyth and Switchboard and displays it in a table.
- Computes the price averages from Pyth and Switchboard to provide more accurate results.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x.x)
- npm (>= 6.x.x) or yarn (>= 1.x.x)

## Installation

To set up your development environment, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/leevigh/fusion-oracle-aggregator.git
   cd oracle-aggregator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Development

To start the development server, run:

```bash
npm run dev
# or
yarn run dev
```

## Production

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

To start the production server, run:

```bash
npm start
# or
yarn start
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
