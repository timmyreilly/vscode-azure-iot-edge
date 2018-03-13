// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

"use strict";

export class Constants {
    public static ExtensionId = "vsciot-vscode.azure-iot-edge";
    public static AIKey = "fed7fc65-5b4a-4e66-9d46-c5f016d4e2b4";
    public static deploymentFile = "deployment.json";
    public static launchFile = "launch.json";
    public static dockerfileNamePattern = "**/[dD]ocker[fF]ile*";
    public static dotNetProjectFileNamePattern = "**/*.{csproj,fsproj}";
    public static moduleConfigFileNamePattern = "**/module.json";
    public static deploymentTemplatePattern = "**/deployment.template.json";
    public static EdgeDebugSessionPrefix = "Debug IoT Edge";
    public static lastUsedImageNameCacheKey = "azureIotEdge.lastUsedImageName";
    public static moduleNamePlaceholder = "%MODULE%";
    public static moduleImagePlaceholder = "%MODULE_IMAGE%";
    public static moduleFolderPlaceholder = "%MODULE_FOLDER%";
    public static appFolder = "%APP_FOLDER%";
    public static repositoryPlaceholder = "%REPOSITORY%";
    public static dllPlaceholder = "%DLLNAME%";
    public static assetsFolder = "assets";
    public static solutionFolder = "solution";
    public static LANGUAGE_CSHARP = "C# Module";
    public static CSHARP_FUNCTION = "Azure Functions - C#";
    public static LANGUAGE_PYTHON = "python";
    public static moduleFolder = "modules";
    public static gitIgnore = ".gitignore";
    public static deploymentTemplate = "deployment.template.json";
    public static userCancelled = "Cancelled by user";
    public static edgeChannel = "Azure IoT Edge";
    public static solutionName = "Solution Name";
    public static solutionNamePrompt = "Provide a Solution Name";
    public static solutionNameDft = "EdgeSolution";
    public static moduleName = "Module Name";
    public static moduleNamePrompt = "Provide a Module Name";
    public static moduleNameDft = "SampleModule";
    public static registryPlaceholder = "<registry>";
    public static repoNamePlaceholder = "<repo-name>";
    public static tagPlaceholder = "<tag>";
    public static repositoryPattern = `${Constants.registryPlaceholder}/${Constants.repoNamePlaceholder}`;
    public static repositoryPrompt = "Provide Docker Image Repository for the Module";
    public static selectTemplate = "Select Module Template";
    public static parentFolderLabel = "Select Folder";
    public static moduleManifest = "module.json";
    public static outputConfig = "config";
    public static vscodeFolder = ".vscode";
    public static moduleConfigFile = "Module Config file";
    public static deploymentTemplateDesc = "Deployment Template file";
    public static buildModuleImageEvent = "buildModuleImage";
    public static buildAndPushModuleImageEvent = "buildAndPushModuleImage";
    public static buildSolutionEvent = "buildSolution";
    public static generateDeploymentEvent = "generateDeployment";
    public static addModuleEvent = "addModule";
    public static launchCSharp = "launch_csharp.json";
    public static noSolutionFileMessage = "no solution file";
    public static manifestGenerated = "Deployment manifest has been generated at .config/deployment.json.";
    public static manifestGeneratedWithBuild = `${Constants.manifestGenerated} Module images are being built.`;
    public static selectPlatform = "Select Platform";
    // the last item is the module name enterred by the user which cannot be determined yet and will be skipped for checking
    public static moduleDpManifestJsonPath = ["moduleContent", "$edgeAgent", "properties.desired", "modules", ""];
    public static moduleNameDpManifestJsonPathIndex = 4;
    // the 4th item is the module name enterred by the user which cannot be determined yet and will be skipped for checking
    public static imgDeploymentManifestJsonPath = ["moduleContent", "$edgeAgent", "properties.desired", "modules", "", "settings", "image"];
    // the last item is the route name enterred by the user which cannot be determined yet and will be skipped for checking
    public static routeDeploymentManifestJsonPath = ["moduleContent", "$edgeHub", "properties.desired", "routes", ""];
    public static moduleTypes = ["docker"];
    public static moduleStatuses = ["running", "stopped"];
    public static moduleRestartPolicies = ["always", "never", "on-failed", "on-unhealthy"];
    public static moduleSnippetLabel = "edgeModule";
    public static moduleSnippetDetail = "Module for edgeAgent to start";
    public static routeSnippetLabel = "edgeRoute";
    public static routeSnippetDetail = "Route for the Edge Hub. Route name is used as the key for the route. To delete a route, set the route name as null";
}
