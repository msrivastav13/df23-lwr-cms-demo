# Digital Experience Bundle Sample Project

This is a sample project that has
<ol>
  <li>Salesforce Experience Cloud Enhanced LWR Site</li>
  <li>Digital Experience Bundle metadata and related metadata for deployment from one org to another</li>
  <li>Deployment scripts using github action for CI/CD</li>
</ol>

## What is the purpose of this repo?

This repo has a sample Enhanced LWR Site built using Lightning Web Components(LWC). The purpose of this repo is to show you how you can use digital experience bundle metadata to deploy changes from one salesforce to another org

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

we are using the `replacements` property in the `sfdx-project.json` file to replace environment specific metadata.

## Screenshot of final deployed site

![Screen Shot 2023-03-07 at 11 00 29 PM](https://user-images.githubusercontent.com/2276156/223641821-454b1dbb-73b9-4e5d-82a6-27b8e47c3b78.png)