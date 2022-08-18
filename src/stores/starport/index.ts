import env from './common/env'
import blocks from './common/blocks'
import wallet from './common/wallet'
export { blocks, env, wallet }

import { Buffer } from 'buffer'
// @ts-ignore
globalThis['Buffer'] = Buffer
