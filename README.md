# simple-quickswap-sdk

<!-- [![npm version](https://badge.fury.io/js/simple-uniswap-sdk.svg)](https://badge.fury.io/js/simple-uniswap-sdk)
![downloads](https://img.shields.io/npm/dw/simple-uniswap-sdk) -->

Quickswap SDK which handles the routes automatically for you, changes in trade quotes reactive subscriptions, exposure to formatted easy to understand information, bringing back the best trade quotes automatically, generating transactions for you and much more. All the Quickswap logic for you in a simple to easy understand interface to hook straight into your dApp without having to understand how it all works.

Please note this is not owned or maintained by Quickswap and is a open source package for anyone to use freely.

## Features 🚀

🚀 Supports quickswap prices together and returns you the best price, so you do not need to query both yourself
<br/>
🚀 Queries all the best routes and finds the best price for you
<br/>
🚀 Exposes all the route paths it tried so you can see every detail in how it worked out the best price
<br/>
🚀 Factor in the cost of the transaction into the quotes with 1 config change
<br/>
🚀 Easy subscriptions to get alerted when the price moves or the trade expires
<br/>
🚀 The transaction is generated for you, just fill it with the gas details and send it on its way
<br/>
🚀 All the figures are all formatted for you, no need to worry about timing it back to its decimal formatted place, just render it straight onto your UI
<br/>
🚀 Exposes all the tokens metadata for you, name, symbol, decimals
<br/>
🚀 Uses [multicall](https://github.com/joshstevens19/ethereum-multicall) for every on chain lookup, so even though it could be doing 100 JSONRPC calls it is all put into a few calls meaning it can stay very fast
<br/>
🚀 Tidy bundle size
<br/>
🚀 Fully typescript supported with full generated typings
<br/>
🚀 query many tokens in 1 jsonrpc call perfect to get token metadata fast
<br/>
🚀 and much more!!

``` This repo is in beta phase and just suitable for fetching the price quotes ``` 

Sample usage:

```
import { UniswapPair, ChainId as UniswapChainId, UniswapPairSettings, UniswapVersion, TradeDirection} from 'simple-quickswap-sdk';


const uniswapPair = new UniswapPair({
    // the contract address of the token you want to convert FROM
    fromTokenContractAddress: token1Address,
    // the contract address of the token you want to convert TO
    toTokenContractAddress: token2Address,
    // the ethereum address of the user using this part of the dApp
    ethereumAddress: '0x207ca4370639120f9A049aF9CAB4fCaa608F2445',
    // you can pass in the provider url as well if you want
    providerUrl: Provider.PolygonMainnet,
    chainId: QuickChainId.MATIC,
    settings: new UniswapPairSettings({
      uniswapVersions: [UniswapVersion.v2],      
    })
  });
  const UniswapPairFactory = await uniswapPair.createFactory();
  const tradeRoutes = await UniswapPairFactory.findAllPossibleRoutesWithQuote('1',TradeDirection.input)
```