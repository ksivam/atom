# my-package package

A short description of your package.

![A screenshot of your package](https://f.cloud.github.com/assets/69169/2290250/c35d867a-a017-11e3-86be-cd7c5bf3ff9b.gif)

links
------
- node installation: http://azure.microsoft.com/en-us/documentation/articles/xplat-cli/
- arm docs: http://azure.microsoft.com/en-us/documentation/articles/xplat-cli-azure-resource-manager/

login to azure
--------------
azure login -u <login> password -p <password>

change to arm mode
------------------
azure config mode arm

get resource group under subscription
-------------------------------------
azure group list

get resources under a resource group
------------------------------------
azure group show Group-1

get resources under server
-------------------------
azure resource list Group-1 testausservert Microsoft.Sql/servers 2014-04-01-preview

get server details
-------------------
azure resource show Group-1 testausservert Microsoft.Sql/servers 2014-04-01-preview

get database details
-------------------------
azure resource show Group-1 testausdb Microsoft.Sql/servers/databases 2014-04-01-preview --parent servers/testausservert
