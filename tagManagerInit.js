var tagName = /* var of type string here */ ;
var tagmanagerContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"hash","type":"string"}],"name":"checkIfPhotoExists","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"thumbNailHash","type":"string"}],"name":"addNewPhoto","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"thumbNailHash","type":"string"}],"name":"deletePhoto","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"v","type":"uint256"}],"name":"uintToBytes","outputs":[{"name":"ret","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"putInNewBlock","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"thumbNailHash","type":"string"}],"name":"constrcutHashThumbNailString","outputs":[{"name":"","type":"string"}],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"arrLength","type":"uint256"}],"name":"convertToJson","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"tagName","type":"string"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tagName","type":"string"},{"indexed":false,"name":"data","type":"string"}],"name":"newBlockAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"}],"name":"messagePrompt","type":"event"}]);
var tagmanager = tagmanagerContract.new(
   tagName,
   {
     from: web3.eth.accounts[0], 
     data: '0x606060405234156200000d57fe5b60405162002a8638038062002a86833981016040528080518201919050505b60036007819055506000600660006101000a81548160ff0219169083151502179055506000600881905550600060058190555080600990805190602001906200007792919062000080565b505b506200012f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000c357805160ff1916838001178555620000f4565b82800160010185558215620000f4579182015b82811115620000f3578251825591602001919060010190620000d6565b5b50905062000103919062000107565b5090565b6200012c91905b80821115620001285760008160009055506001016200010e565b5090565b90565b612947806200013f6000396000f3006060604052361561008c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063216fb9e41461008e5780633d6c91e8146100f85780635d960e1a1461018d5780639201de551461022257806394e8767d146102cd578063a3d50a4814610309578063beb7c88714610313578063c96a379a1461042f575bfe5b6100de600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506104d6565b604051808215151515815260200191505060405180910390f35b61018b600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610563565b005b610220600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506107c0565b005b341561022a57fe5b610244600480803560001916906020019091905050610cc0565b6040518080602001828103825283818151815260200191508051906020019080838360008314610293575b8051825260208311156102935760208201915060208101905060208303925061026f565b505050905090810190601f1680156102bf5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102d557fe5b6102eb6004808035906020019091905050610eab565b60405180826000191660001916815260200191505060405180910390f35b610311610f56565b005b6103a6600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506114df565b60405180806020018281038252838181518152602001915080519060200190808383600083146103f5575b8051825260208311156103f5576020820191506020810190506020830392506103d1565b505050905090810190601f1680156104215780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561043757fe5b61044d6004808035906020019091905050611773565b604051808060200182810382528381815181526020019150805190602001908083836000831461049c575b80518252602083111561049c57602082019150602081019050602083039250610478565b505050905090810190601f1680156104c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060016001836040518082805190602001908083835b6020831061051057805182526020820191506020810190506020830392506104ed565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902054101515610554576001905061055e565b6000905061055e565b5b919050565b60016001836040518082805190602001908083835b6020831061059b5780518252602082019150602081019050602083039250610578565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020541015156106b55760016001836040518082805190602001908083835b6020831061060e57805182526020820191506020810190506020830392506105eb565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902054016001836040518082805190602001908083835b602083106106795780518252602082019150602081019050602083039250610656565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020819055506107bb565b5b600660009054906101000a900460ff1615156106d1576106b6565b6001600660006101000a81548160ff0219169083151502179055508160036005548154811015156106fe57fe5b906000526020600020906004020160005b5060000190805190602001906107269291906125ea565b5080600360055481548110151561073957fe5b906000526020600020906004020160005b5060010190805190602001906107619291906125ea565b5042600360055481548110151561077457fe5b906000526020600020906004020160005b50600201819055506005600081548092919060010191905055506000600660006101000a81548160ff0219169083151502179055505b5b5050565b600060006000600060006001876040518082805190602001908083835b6020831061080057805182526020820191506020810190506020830392506107dd565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020600081548092919060019003919050555060006001886040518082805190602001908083835b6020831061087c5780518252602082019150602081019050602083039250610859565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020541415610cb6575b600660009054906101000a900460ff1615156108d657600a94506108b7565b6001600660006101000a81548160ff0219169083151502179055506002876040518082805190602001908083835b602083106109275780518252602082019150602081019050602083039250610904565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549350600a8481151561096957fe5b049250600a8481151561097857fe5b06915060016000600086815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600a830290505b600a6001840102811015610abf576000600082815260200190815260200160002060030160009054906101000a900460ff161515610ab157601780548060010182816109fd919061266a565b916000526020600020906004020160005b60006000858152602001908152602001600020909190915060008201816000019080546001816001161561010002031660029004610a4d92919061269c565b5060018201816001019080546001816001161561010002031660029004610a7592919061269c565b50600282015481600201556003820160009054906101000a900460ff168160030160006101000a81548160ff0219169083151502179055505050505b5b80806001019150506109b1565b610c9a6017805480602002602001604051908101604052809291908181526020016000905b82821015610c84578382906000526020600020906004020160005b5060806040519081016040529081600082018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ba55780601f10610b7a57610100808354040283529160200191610ba5565b820191906000526020600020905b815481529060010190602001808311610b8857829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c475780601f10610c1c57610100808354040283529160200191610c47565b820191906000526020600020905b815481529060010190602001808311610c2a57829003601f168201915b50505050508152602001600282015481526020016003820160009054906101000a900460ff16151515158152505081526020019060010190610ae4565b50505050600a86811515610c9457fe5b04611d25565b6000600660006101000a81548160ff0219169083151502179055505b5b50505050505050565b610cc8612723565b610cd0612737565b600060006000610cde612737565b6020604051805910610ced5750595b908082528060200260200182016040525b50945060009350600092505b6020831015610dc9578260080260020a876001900402600102915060007f010000000000000000000000000000000000000000000000000000000000000002827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515610dbb57818585815181101515610d8257fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535083806001019450505b5b8280600101935050610d0a565b83604051805910610dd75750595b908082528060200260200182016040525b509050600092505b83831015610e9d578483815181101515610e0657fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000028184815181101515610e5f57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b8280600101935050610df0565b8095505b5050505050919050565b60006000821415610ede577f30000000000000000000000000000000000000000000000000000000000000009050610f4d565b5b6000821115610f4c576101008160019004811515610ef957fe5b0460010290507f01000000000000000000000000000000000000000000000000000000000000006030600a84811515610f2e57fe5b06010260010281179050600a82811515610f4457fe5b049150610edf565b5b8090505b919050565b600060075460055411156114bf57600660009054906101000a900460ff1615156114ba576001600660006101000a81548160ff021916908315150217905550600090505b6007548110156110825760038160016005540303815481101515610fba57fe5b906000526020600020906004020160005b50600482815481101515610fdb57fe5b906000526020600020906004020160005b506000820181600001908054600181600116156101000203166002900461101492919061269c565b506001820181600101908054600181600116156101000203166002900461103c92919061269c565b50600282015481600201556003820160009054906101000a900460ff168160030160006101000a81548160ff021916908315150217905550905050600181019050610f9a565b600160085401600881905550600754600554036005819055506110a481611773565b600f90805190602001906110b99291906125ea565b506110d06110cb600160085403610eab565b610cc0565b601190805190602001906110e59291906125ea565b506110f96110f4600854610eab565b610cc0565b6012908051906020019061110e9291906125ea565b5061135660098054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111a85780601f1061117d576101008083540402835291602001916111a8565b820191906000526020600020905b81548152906001019060200180831161118b57829003601f168201915b5050505050604060405190810160405280600181526020017f5f0000000000000000000000000000000000000000000000000000000000000081525060118054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561127a5780601f1061124f5761010080835404028352916020019161127a565b820191906000526020600020905b81548152906001019060200180831161125d57829003601f168201915b5050505050604060405190810160405280600181526020017f5f0000000000000000000000000000000000000000000000000000000000000081525060128054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561134c5780601f106113215761010080835404028352916020019161134c565b820191906000526020600020905b81548152906001019060200180831161132f57829003601f168201915b50505050506121ae565b6010908051906020019061136b9291906125ea565b507ff7599e85515c7e7fb95afa3449fa764f674b8bb2278f4f45bff5363c9064d04c6010600f60405180806020018060200183810383528581815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561141e5780601f106113f35761010080835404028352916020019161141e565b820191906000526020600020905b81548152906001019060200180831161140157829003601f168201915b50508381038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156114a15780601f10611476576101008083540402835291602001916114a1565b820191906000526020600020905b81548152906001019060200180831161148457829003601f168201915b505094505050505060405180910390a16114b9610f56565b5b6114db565b6000600660006101000a81548160ff0219169083151502179055505b5b50565b6114e7612723565b611596604060405190810160405280600681526020017f7b686173683a000000000000000000000000000000000000000000000000000081525084604060405190810160405280600181526020017f2c00000000000000000000000000000000000000000000000000000000000000815250604060405190810160405280600e81526020017f7468756d624e61696c486173683a000000000000000000000000000000000000815250866121ae565b600a90805190602001906115ab9291906125ea565b506116b9600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116455780601f1061161a57610100808354040283529160200191611645565b820191906000526020600020905b81548152906001019060200180831161162857829003601f168201915b5050505050604060405190810160405280600181526020017f7d000000000000000000000000000000000000000000000000000000000000008152506020604051908101604052806000815250602060405190810160405280600081525060206040519081016040528060008152506121ae565b600b90805190602001906116ce9291906125ea565b50600b8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117655780601f1061173a57610100808354040283529160200191611765565b820191906000526020600020905b81548152906001019060200180831161174857829003601f168201915b505050505090505b92915050565b61177b612723565b60006020604051908101604052806000815250600e90805190602001906117a39291906125ea565b50600090505b82811015611b38576119336004828154811015156117c357fe5b906000526020600020906004020160005b506000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561186c5780601f106118415761010080835404028352916020019161186c565b820191906000526020600020905b81548152906001019060200180831161184f57829003601f168201915b505050505060048381548110151561188057fe5b906000526020600020906004020160005b506001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119295780601f106118fe57610100808354040283529160200191611929565b820191906000526020600020905b81548152906001019060200180831161190c57829003601f168201915b50505050506114df565b600d90805190602001906119489291906125ea565b50600081141515611b0557611aea600e8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119ec5780601f106119c1576101008083540402835291602001916119ec565b820191906000526020600020905b8154815290600101906020018083116119cf57829003601f168201915b5050505050604060405190810160405280600181526020017f2c00000000000000000000000000000000000000000000000000000000000000815250600d8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611abe5780601f10611a9357610100808354040283529160200191611abe565b820191906000526020600020905b815481529060010190602001808311611aa157829003601f168201915b5050505050602060405190810160405280600081525060206040519081016040528060008152506121ae565b600e9080519060200190611aff9291906125ea565b50611b2a565b600d600e9080546001816001161561010002031660029004611b2892919061274b565b505b5b80806001019150506117a9565b611c6b604060405190810160405280600281526020017f7b5b000000000000000000000000000000000000000000000000000000000000815250600e8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c085780601f10611bdd57610100808354040283529160200191611c08565b820191906000526020600020905b815481529060010190602001808311611beb57829003601f168201915b5050505050604060405190810160405280600281526020017f5d7d000000000000000000000000000000000000000000000000000000000000815250602060405190810160405280600081525060206040519081016040528060008152506121ae565b600e9080519060200190611c809291906125ea565b50600e8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d175780601f10611cec57610100808354040283529160200191611d17565b820191906000526020600020905b815481529060010190602001808311611cfa57829003601f168201915b505050505091505b50919050565b6000600090505b8251811015611de2578281815181101515611d4357fe5b90602001906020020151600482815481101515611d5c57fe5b906000526020600020906004020160005b506000820151816000019080519060200190611d8a9291906127d2565b506020820151816001019080519060200190611da79291906127d2565b506040820151816002015560608201518160030160006101000a81548160ff0219169083151502179055509050508080600101915050611d2c565b611deb81611773565b60139080519060200190611e009291906125ea565b50611e12611e0d83610eab565b610cc0565b60159080519060200190611e279291906125ea565b50611e3c611e3760018401610eab565b610cc0565b60169080519060200190611e519291906125ea565b5061204d60098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611eeb5780601f10611ec057610100808354040283529160200191611eeb565b820191906000526020600020905b815481529060010190602001808311611ece57829003601f168201915b505050505060158054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611f865780601f10611f5b57610100808354040283529160200191611f86565b820191906000526020600020905b815481529060010190602001808311611f6957829003601f168201915b505050505060168054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156120215780601f10611ff657610100808354040283529160200191612021565b820191906000526020600020905b81548152906001019060200180831161200457829003601f168201915b5050505050602060405190810160405280600081525060206040519081016040528060008152506121ae565b601490805190602001906120629291906125ea565b507ff7599e85515c7e7fb95afa3449fa764f674b8bb2278f4f45bff5363c9064d04c601460136040518080602001806020018381038352858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156121155780601f106120ea57610100808354040283529160200191612115565b820191906000526020600020905b8154815290600101906020018083116120f857829003601f168201915b50508381038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156121985780601f1061216d57610100808354040283529160200191612198565b820191906000526020600020905b81548152906001019060200180831161217b57829003601f168201915b505094505050505060405180910390a15b505050565b6121b6612723565b6121be612737565b6121c6612737565b6121ce612737565b6121d6612737565b6121de612737565b6121e6612723565b6121ee612737565b600060008e98508d97508c96508b95508a94508451865188518a518c510101010160405180591061221c5750595b908082528060200260200182016040525b50935083925060009150600090505b88518110156122f057888181518110151561225357fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f01000000000000000000000000000000000000000000000000000000000000000283838060010194508151811015156122b257fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b808060010191505061223c565b600090505b87518110156123a957878181518110151561230c57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561236b57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b80806001019150506122f5565b600090505b86518110156124625786818151811015156123c557fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561242457fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b80806001019150506123ae565b600090505b855181101561251b57858181518110151561247e57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f01000000000000000000000000000000000000000000000000000000000000000283838060010194508151811015156124dd57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b8080600101915050612467565b600090505b84518110156125d457848181518110151561253757fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561259657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b8080600101915050612520565b8299505b50505050505050505095945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061262b57805160ff1916838001178555612659565b82800160010185558215612659579182015b8281111561265857825182559160200191906001019061263d565b5b5090506126669190612852565b5090565b815481835581811511612697576004028160040283600052602060002091820191016126969190612877565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106126d55780548555612712565b8280016001018555821561271257600052602060002091601f016020900482015b828111156127115782548255916001019190600101906126f6565b5b50905061271f9190612852565b5090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061278457805485556127c1565b828001600101855582156127c157600052602060002091601f016020900482015b828111156127c05782548255916001019190600101906127a5565b5b5090506127ce9190612852565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061281357805160ff1916838001178555612841565b82800160010185558215612841579182015b82811115612840578251825591602001919060010190612825565b5b50905061284e9190612852565b5090565b61287491905b80821115612870576000816000905550600101612858565b5090565b90565b6128d091905b808211156128cc57600060008201600061289791906128d3565b6001820160006128a791906128d3565b60028201600090556003820160006101000a81549060ff02191690555060040161287d565b5090565b90565b50805460018160011615610100020316600290046000825580601f106128f95750612918565b601f0160209004906000526020600020908101906129179190612852565b5b505600a165627a7a7230582085f6591010bef30dd135d9ed1ff784e9964118ebc7ddf20f6ba8a5428184e9910029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })