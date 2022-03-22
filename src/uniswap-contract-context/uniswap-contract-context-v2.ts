import { JsonFragment } from '@ethersproject/abi';

export class UniswapContractContextV2 {
  /**
   * The uniswap router address
   */
  public static routerAddress = '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff';

  /**
   * The uniswap factory address
   */
  public static factoryAddress = '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32';

  /**
   * The uniswap pair address
   */
  public static pairAddress = '0xadbF1854e5883eB8aa7BAf50705338739e558E5b';

  /**
   * Uniswap v2 router
   */
  public static routerAbi: JsonFragment[] = require('../ABI/uniswap-router-v2.json');

  /**
   * Uniswap v2 factory
   */
  public static factoryAbi: JsonFragment[] = require('../ABI/uniswap-factory-v2.json');

  /**
   * Uniswap v2 pair
   */
  public static pairAbi: JsonFragment[] = require('../ABI/uniswap-pair-v2.json');
}
