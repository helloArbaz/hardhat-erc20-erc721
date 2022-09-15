const fs = require('fs')

const writeContractAddress = function (
  contractName: string,
  contractAddress: string,
) {
  let rootFolderPath = `./client-app/src/contract-deployed-address`

  if (!fs.existsSync(rootFolderPath)) {
    fs.mkdirSync(rootFolderPath)
  }

  let folderPath = `./client-app/src/contract-deployed-address/${contractName}`
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath)
  }

  fs.writeFile(
    `${folderPath}/${contractName}.json`,
    `{"address":"${contractAddress}"}`,
    function (err?: any, res?: any) {
      if (err) err
      console.log('The file was saved!')
    },
  )
}

export {
    writeContractAddress
}
