# CueBlox Blog on Netlify

A monorepo with content managed by [CueBlox](https://www.cueblox.com), served by an Azure Static Web Apps API, and a website that consumes it, also hosted on Azure Static Web Apps.

[Website Demo]()

[API/GraphQL Demo]()

## GitHub Actions

`.github/workflows/data.yml` contains a workflow that will automatically create a pre-release named 'CueBlox' of your processed content every time you make a change to content in the `/data/` folder.

This action uses pre-releases with a fixed name so that the download URL of your data is constant. For this sample repository it is `https://github.com/cueblox/starter-netlify-blog/releases/download/blox/data.json`, yours will change based on your GitHub username and the name of your repository.

This action will run after you push a change to your content in the `/data` directory, so start by making some changes and pushing them to GitHub to trigger the action.

## MONOREPO: Two Netlify Deployments

There are two separate web sites in this starter. There will be two separate deployments to Netlify.

### CMS/API Deployment

Create a Netlify deployment of the /sites/cms folders. Choose /sites/cms/app for the App folder and /sites/cms/api for the API folder.


### Website Deployment

Create a Netlify deployment of the /sites/blog folders. Choose /sites/blog for the App folder and no API folder. 

## Working with Content

Download [CueBlox](https://github.com/cueblox/blox) and use `blox` commands to work with the content. `blox new` and `blox build` will be the most commonly used commands. Commit and push your content to have it automatically deployed to the REST/GraphQL endpoint.

Schemata are in the `/schemata` folder. You can see which fields are available for each content model by investigating the definitions.

## Blog Template

Blog template is from [next.js examples](https://github.com/vercel/next.js/tree/canary/examples), Copyright Vercel, Inc. Licensed under the MIT License.

