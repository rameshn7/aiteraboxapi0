# Terabox API

A Cloudflare Worker for interacting with Terabox (formerly Dubox) to retrieve file information and download files.

## Features

- Get file information from Terabox share links
- Proxy downloads through the API
- Support for range requests (streaming)
- CORS enabled

## Deployment

1. Install Wrangler CLI: `npm install -g wrangler`
2. Login: `wrangler login`
3. Deploy: `npm run deploy`

## Configuration

Set your Terabox cookie in `src/constants/headers.js`

## Endpoints

- `POST /` - Get file info
- `GET /proxy` - Download file through proxy
