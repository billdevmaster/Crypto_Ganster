const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_tokenIDs","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adminAddress","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"teamList","type":"address[]"}],"name":"batchMintTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"userAddresses","type":"address[]"}],"name":"batchWhiteListAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"blackListAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"createItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isWhiteListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adminAddress","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMintWhitelistAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setRevealOpenSea","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenCounters","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var web3 = window.web3;
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;

let web3Modal;
let provider;
let selectedAccount;
var contract;
var connectStatus = false;
$(window).bind('beforeunload', function(event) {
  try{
    provider.walletConnectProvider = null;
  }catch(e)
  {
  }
  try{
    provider.disconnect();
  }catch(e)
  {
  }
  try{
    provider.close();
  }catch(e)
  {
  }
});

window.addEventListener('load', async () => {
	init();
});

async function onConnect() {
  try {
    provider = await web3Modal.connect();
    console.log(provider)
    const ethereum = window.ethereum;
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }]
    });
    fetchAccountData();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });
}

async function onDisconnect() {
  if(provider) {
    // await provider.close();
    await web3Modal.clearCachedProvider();
    provider = null;
  }
  selectedAccount = null;
}

async function fetchAccountData() {
	web3 = new Web3(provider);
	// Get list of accounts of the connected wallet
	const accounts = await web3.eth.getAccounts();
	selectedAccount = accounts[0];
	contract = new web3.eth.Contract(abi, "0x643e08b21a1DA1a00f97dd974931D09abb1C7c36");
  connectStatus = true;
  jQuery("#w-node-f17a72c9-10e2-ce69-b31e-90dc47d1e910-c556bb9f").html("Proceed Purchase");
}

function init(){
	const providerOptions = {
   walletconnect: {
     package: WalletConnectProvider,
     options: {
       infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
     }
   },

   fortmatic: {
     package: Fortmatic,
     options: {
       key: "pk_test_391E26A3B43A3350"
     }
   }
 };

 web3Modal = new Web3Modal({
	    cacheProvider: false, // optional
	    providerOptions, // required
	    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
   });
   console.log(provider);
}

async function buyTicket(){
	jQuery('.toast').toast({delay: 5000});
	gameIsActive = await contract.methods.gameIsActive().call();
	if (gameIsActive == false){
		jQuery('.toast-body').html('Game is not started. Please wait until game will start!');
		jQuery('.toast').toast('show');
		return;
	}
	var amount = Web3.utils.toWei(jQuery("#amount").val(), 'nano');
	console.log(amount)
  var buyStatus = await contract.methods.buy(amount).send({from: selectedAccount});
  getDataInfo();

  if (buyStatus.status == true){
    jQuery('.toast-body').html('Successfully Buyed!');
    jQuery('.toast').toast('show');
  }
}

async function purchase() {
  if (connectStatus === false){
    onConnect();
  }else{
   var amount = parseInt(jQuery('.quantity').val());
   var gas = 178000;
   if (amount > 0 && amount <= 20){
    if (provider){
     var buyStatus;
     var isWhiteListed = await contract.methods.isWhiteListed(selectedAccount).call();
     gas = gas + (amount - 1) * 50000;
     if (isWhiteListed){
      buyStatus = await contract.methods.createItem(amount).send({from: selectedAccount, value: Web3.utils.toWei((0.08*amount).toString(), 'ether'), gas: gas});
    }else{
      buyStatus = await contract.methods.createItem(amount).send({from: selectedAccount, value: Web3.utils.toWei((0.1*amount).toString(), 'ether'), gas: gas});
    }
  }else{
   onConnect();
 }
}else{
  alert("Please input correct quantity")
}
}
}
