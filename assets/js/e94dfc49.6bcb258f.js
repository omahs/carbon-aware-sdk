"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[8160],{5132:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(7624),a=r(5788);const i={sidebar_position:1},o="Overview",s={id:"overview/overview",title:"Overview",description:"There are several ways to consume CarbonAware data for your use case. Each",source:"@site/docs/overview/overview.md",sourceDirName:"overview",slug:"/overview/",permalink:"/carbon-aware-sdk/docs/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/overview/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/carbon-aware-sdk/docs/category/overview"},next:{title:"Enablement",permalink:"/carbon-aware-sdk/docs/overview/enablement"}},c={},l=[{value:"Carbon Aware Library",id:"carbon-aware-library",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Data Sources",id:"data-sources",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuration options",id:"configuration-options",level:3},{value:"Environment variables",id:"environment-variables",level:4},{value:"Local project settings",id:"local-project-settings",level:4},{value:"Publish WebAPI with container",id:"publish-webapi-with-container",level:2},{value:"Build container image",id:"build-container-image",level:3},{value:"Run Web API container",id:"run-web-api-container",level:3},{value:"Deploy Web API on Kubernetes with Helm",id:"deploy-web-api-on-kubernetes-with-helm",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.MN)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"There are several ways to consume CarbonAware data for your use case. Each\napproach surfaces the same data for the same call (e.g. the CLI should not give\nyou different data than the WebAPI for the same query). We provide a number of\ndifferent endpoints to provide the most flexibility to integrate to your\nenvironment:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can run the application using the ",(0,t.jsx)(n.a,{href:"./src/CarbonAware.CLI",children:"CLI"})," and refer\nto more documentation ",(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/tutorial-basics/carbon-aware-cli",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can build a container containing the ",(0,t.jsx)(n.a,{href:"./src/CarbonAware.WebApi",children:"WebAPI"}),"\nand connect via REST requests and refer to more documentation\n",(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/tutorial-basics/carbon-aware-webapi",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can reference the ",(0,t.jsx)(n.a,{href:"./src/GSF.CarbonAware",children:"Carbon Aware C# Library"})," in your\nprojects and make use of its functionalities and features."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(Future) You can install the Nuget package and make requests directly.\n(",(0,t.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/40",children:"tracked here"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Each of these has configuration requirements which are detailed below. You can\nalso visit the ",(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/quickstart",children:"quickstart.md"})," guide for a step-by-step\nprocess for running the CLI locally, deploying the Web API locally or in the\ncloud, polling the API via HTTP requests or generating and using client\nlibraries (Python example)."]}),"\n",(0,t.jsxs)(n.p,{children:["For more detailed architecture and design decisions around the Carbon Aware SDK,\nrefer to the ",(0,t.jsx)(n.a,{href:"../architecture/",children:"Architecture directory"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"carbon-aware-library",children:"Carbon Aware Library"}),"\n",(0,t.jsx)(n.p,{children:"The Carbon Aware SDK provides a C# Client Library with handlers that replicates\nthe Web API, CLI and SDK functionality. See:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/tutorial-extras/carbon-aware-library",children:"carbon-aware-library.md"})," for more information\nabout library features."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/tutorial-extras/packaging",children:"packaging.md"})," for details on how to package and consume the\nlibrary."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/tutorial-extras/packaging#use-package-with-dependency-injection",children:"packaging.md"}),"\nfor instructions on integrating the library in other projects with dependency\ninjection."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,t.jsx)(n.p,{children:"Make sure you have installed the following pre-requisites to setup your local\nenvironment:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["dotnet core SDK\n",(0,t.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download",children:"https://dotnet.microsoft.com/en-us/download"})]}),"\n",(0,t.jsxs)(n.li,{children:["Access to one (or all) of the supported external data APIs","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["WattTime account - See\n",(0,t.jsx)(n.a,{href:"https://docs.watttime.org/#tag/Authentication/operation/post_username_register_post",children:"instruction on WattTime"}),"\nfor details (or use our python samples as described\n",(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/samples/watttime-registration/",children:"here"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["ElectricityMaps account - See\n",(0,t.jsx)(n.a,{href:"https://api-portal.electricitymaps.com/home",children:"instruction on ElectricityMaps"}),"\nfor details (or setup a\n",(0,t.jsx)(n.a,{href:"https://api-portal.electricitymaps.com",children:"free trial"}),"). Note that the free\ntrial has some\n",(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/tutorial-extras/selecting-a-data-source#restrictions-electricitymaps-free-trial-user",children:"restrictions"})]}),"\n",(0,t.jsxs)(n.li,{children:["ElectricityMapsFree account - See\n",(0,t.jsx)(n.a,{href:"https://www.co2signal.com/#Subscriber-Email",children:"instruction on ElectricityMapsFree"}),"\nfor details."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, you can also set up your environment using VSCode Remote\nContainers (Dev Container):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docker"}),"\n",(0,t.jsx)(n.li,{children:"VSCode (it is recommended to work in a Dev Container)"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",children:"Remote Containers extension for VSCode"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"data-sources",children:"Data Sources"}),"\n",(0,t.jsxs)(n.p,{children:["We support multiple data sources for carbon data. At this time, a JSON file,\n",(0,t.jsx)(n.a,{href:"https://www.watttime.org/",children:"WattTime"}),",\n",(0,t.jsx)(n.a,{href:"https://www.electricitymaps.com/",children:"ElectricityMaps"}),", and\n",(0,t.jsx)(n.a,{href:"https://www.co2signal.com/",children:"ElectricityMapsFree"})," are supported. To use WattTime\ndata or Electricity Maps data, you'll need to acquire a license from them and\nset the appropriate configuration information."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also visit the\n",(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/tutorial-extras/selecting-a-data-source",children:"selecting-a-date-source.md"})," guide for more\ninformation on data sources options, and\n",(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/architecture/data-sources",children:"data-sources.md"})," for detailed architecture\ndecisions around integrating different data providers into the carbon aware SDK."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["This project uses the dotnet standard\n",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dotnet/core/extensions/configuration",children:"Microsoft.Extensions.Configuration"}),"\nmechanism, which allows the user to configure their environment variables in a\nunified view while making use of different configuration sources. Review the\nlink to understand more about the ",(0,t.jsx)(n.code,{children:"IConfiguration"})," type."]}),"\n",(0,t.jsxs)(n.p,{children:["The WebAPI project uses standard configuration sources provided by\n",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/",children:"ASPNetCore"}),".\nPlease review this link to understand how configuration is loaded and the\npriority of that configuration."]}),"\n",(0,t.jsxs)(n.p,{children:["Please note that configuration is hierarchical. The last configuration source\nloaded that contains a configuration value will be the value that's used. This\nmeans that if the same configuration value is found in both ",(0,t.jsx)(n.code,{children:"appsettings.json"}),"\nand as an environment variable, the value from the environment variable will be\nthe value that's applied."]}),"\n",(0,t.jsx)(n.h3,{id:"configuration-options",children:"Configuration options"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/tutorial-extras/configuration",children:"configuration.md"})," for details about how to\nconfigure specific components of the application."]}),"\n",(0,t.jsx)(n.h4,{id:"environment-variables",children:"Environment variables"}),"\n",(0,t.jsx)(n.p,{children:"When adding values via environment variables, we recommend that you use the\ndouble underscore form, rather than the colon form. Colons won't work in\nnon-windows environment. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'  DataSources__EmissionsDataSource="WattTime"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note that double underscores are used to represent dotted notation or child\nelements that you see in the JSON below. For example, to set proxy information\nusing environment variables, you'd do this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"  DataSources__Configurations__WattTime__UseProxy\n"})}),"\n",(0,t.jsx)(n.h4,{id:"local-project-settings",children:"Local project settings"}),"\n",(0,t.jsxs)(n.p,{children:["For local-only settings you can use environment variables,\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0&tabs=windows#secret-manager",children:"the Secret Manager tool"}),"\n, or an untracked Development appsettings file to override the default project\nsettings."]}),"\n",(0,t.jsxs)(n.p,{children:["To use the settings file, rename a copy of the template called\n",(0,t.jsx)(n.code,{children:"appsettings.Development.json.template"})," to ",(0,t.jsx)(n.code,{children:"appsettings.Development.json"})," and\nremove the first line of (invalid) comments. Then update any settings according\nto your preferences."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Wherever possible, the projects leverage the\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-6.0#default-application-configuration-sources",children:"default .NET configuration"}),"\nexpectations. Thus, they can be configured using any file matching the format:\n",(0,t.jsx)(n.code,{children:"appsettings.<ENV>.json"}),". Where ",(0,t.jsx)(n.code,{children:"<ENV>"})," is the value of the\n",(0,t.jsx)(n.code,{children:"ASPNETCORE_ENVIRONMENT"})," environment variable. By convention projects tend to\nuse the provided HostEnvironment constants ",(0,t.jsx)(n.code,{children:"Development"}),", ",(0,t.jsx)(n.code,{children:"Staging"}),", and\n",(0,t.jsx)(n.code,{children:"Production"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"publish-webapi-with-container",children:"Publish WebAPI with container"}),"\n",(0,t.jsxs)(n.p,{children:["You can publish Web API for Carbon Aware SDK with container. These instructions\nshow how to build / run container image with ",(0,t.jsx)(n.a,{href:"https://podman.io/",children:"Podman"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"build-container-image",children:"Build container image"}),"\n",(0,t.jsxs)(n.p,{children:["Following commands build the container which named to ",(0,t.jsx)(n.code,{children:"carbon-aware-sdk-webapi"}),"\nfrom sources."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$cd src\n$podman build -t carbon-aware-sdk-webapi -f CarbonAware.WebApi/src/Dockerfile .\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-web-api-container",children:"Run Web API container"}),"\n",(0,t.jsx)(n.p,{children:"Carbon Aware SDK Web API publishes the service on Port 80, so you need to map it\nto local port. Following commands maps it to Port 8080."}),"\n",(0,t.jsx)(n.p,{children:"You also need to configure the SDK with environment variables. They are minimum\nset when you use WattTime or ElectricityMaps or ElectricityMapsFree as a data\nsource."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ podman run -it --rm -p 8080:80 \\\n    -e DataSources__ForecastDataSource="WattTime" \\\n    -e DataSources__Configurations__WattTime__Type="WattTime" \\\n    -e DataSources__Configurations__WattTime__Username="wattTimeUsername" \\\n    -e DataSources__Configurations__WattTime__Password="wattTimePassword" \\\n  carbon-aware-sdk-webapi\n'})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ podman run -it --rm -p 8080:80 \\\n    -e DataSources__ForecastDataSource="ElectricityMaps" \\\n    -e DataSources__Configurations__ElectricityMaps__Type="ElectricityMaps" \\\n    -e DataSources__Configurations__ElectricityMaps__APITokenHeader="auth-token" \\\n    -e DataSources__Configurations__ElectricityMaps__APIToken="electricityMapsToken" \\\n  carbon-aware-sdk-webapi\n'})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ podman run -it --rm -p 8080:80 \\\n    -e DataSources__EmissionsDataSource="ElectricityMapsFree" \\\n    -e DataSources__Configurations__ElectricityMapsFree__Type="ElectricityMapsFree" \\\n    -e DataSources__Configurations__ElectricityMapsFree__token="<YOUR_CO2SIGNAL_TOKEN>" \\\n  carbon-aware-sdk-webapi\n'})}),"\n",(0,t.jsx)(n.p,{children:"When you success to run the container, you can access it via HTTP client."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ curl -s http://localhost:8080/emissions/forecasts/current?location=westus2 | jq\n[\n  {\n    "generatedAt": "2022-08-10T14:10:00+00:00",\n    "optimalDataPoint": {\n      "location": "GCPD",\n      "timestamp": "2022-08-10T20:40:00+00:00",\n      "duration": 5,\n      "value": 440.4361702590741\n    },\n            :\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For more information on containerization, refer to the markdown in\n",(0,t.jsx)(n.a,{href:"/carbon-aware-sdk/docs/tutorial-basics/containerization",children:"containerization.md"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-web-api-on-kubernetes-with-helm",children:"Deploy Web API on Kubernetes with Helm"}),"\n",(0,t.jsx)(n.p,{children:"You can deploy Web API as a Kubernetes application via Helm. GSF provides a chart as an OCI container, so you have to use Helm v3.8.0 or later."}),"\n",(0,t.jsxs)(n.p,{children:["Following command creates ",(0,t.jsx)(n.code,{children:"carbon-aware-sdk"})," namespace and deploys Web API into it with specified ",(0,t.jsx)(n.code,{children:"values.yaml"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ helm install casdk -n carbon-aware-sdk --create-namespace oci://ghcr.io/green-software-foundation/charts/carbon-aware-sdk --values values.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"values.yaml"})," should contain ",(0,t.jsx)(n.code,{children:"appsettings.json"})," which would be used in Web API at least. It should include data source definitions and their credentials. It would be stored as ",(0,t.jsx)(n.code,{children:"Secret"})," resource."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'appsettings: |-\n  {\n    "DataSources": {\n      "EmissionsDataSource": "WattTime",\n      "ForecastDataSource": "WattTime",\n      "Configurations": {\n        "WattTime": {\n          "Type": "WattTime",\n          "Username": "username",\n          "Password": "password",\n          "BaseURL": "https://api2.watttime.org/v2/"\n        }\n      }\n    }\n  }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Also you can include following configuration into ",(0,t.jsx)(n.code,{children:"values.yaml"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# Number of replicas\nreplicaCount: 1\n\nimage:\n  repository: ghcr.io/green-software-foundation/carbon-aware-sdk\n  pullPolicy: IfNotPresent\n  # You can set specified tag (equivalent with the SDK version in here)\n  tag: latest\n\n# Set the value if you want to override the name.\nnameOverride: ""\nfullnameOverride: ""\n\nserviceAccount:\n  # Specifies whether a service account should be created\n  create: true\n  # Annotations to add to the service account\n  annotations: {}\n  # The name of the service account to use.\n  # If not set and create is true, a name is generated using the fullname template\n  name: ""\n\npodAnnotations: {}\n\npodSecurityContext: {}\n  # fsGroup: 2000\n\nsecurityContext: {}\n  # capabilities:\n  #   drop:\n  #   - ALL\n  # readOnlyRootFilesystem: true\n  # runAsNonRoot: true\n  # runAsUser: 1000\n\nservice:\n  type: ClusterIP\n  port: 80\n\ningress:\n  enabled: false\n  className: ""\n  annotations: {}\n  hosts:\n    - host: carbon-aware-sdk.local\n      paths:\n        - path: /\n          pathType: ImplementationSpecific\n  tls: []\n  #  - secretName: carbon-aware-sdk-tls\n  #    hosts:\n  #      - carbon-aware-sdk.local\n\nresources: {}\n  # limits:\n  #   cpu: 100m\n  #   memory: 128Mi\n  # requests:\n  #   cpu: 100m\n  #   memory: 128Mi\n\nautoscaling:\n  enabled: false\n  minReplicas: 1\n  maxReplicas: 100\n  targetCPUUtilizationPercentage: 80\n  # targetMemoryUtilizationPercentage: 80\n\nnodeSelector: {}\n\ntolerations: []\n\naffinity: {}\n\n# appsettings.json\nappsettings: |-\n  {\n    "DataSources": {\n      "EmissionsDataSource": "ElectricityMaps",\n      "ForecastDataSource": "WattTime",\n      "Configurations": {\n        "WattTime": {\n          "Type": "WattTime",\n          "Username": "username",\n          "Password": "password",\n          "BaseURL": "https://api2.watttime.org/v2/",\n          "Proxy": {\n            "useProxy": true,\n            "url": "http://10.10.10.1",\n            "username": "proxyUsername",\n            "password": "proxyPassword"\n          }\n        },\n        "ElectricityMaps": {\n          "Type": "ElectricityMaps",\n          "APITokenHeader": "auth-token",\n          "APIToken": "myAwesomeToken",\n          "BaseURL": "https://api.electricitymap.org/v3/"\n        }\n      }\n    }\n  }\n'})}),"\n",(0,t.jsx)(n.p,{children:"The video in below is demonstration to install Carbon Aware SDK via Helm. Note that installing the SDK from local directory ( ~/github-forked/carbon-aware-sdk/helm-chart ), not an OCI container."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/assets/7421132/b09d8ab1-642b-442a-882f-abc802153070",children:"!Demonstration to intall Carbon Aware SDK from local with Helm"})})]})}function h(e={}){const{wrapper:n}={...(0,a.MN)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5788:(e,n,r)=>{r.d(n,{MN:()=>l});var t=r(1504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(r),p=a,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return r?t.createElement(m,o(o({ref:n},h),{},{components:r})):t.createElement(m,o({ref:n},h))}));h.displayName="MDXCreateElement"}}]);