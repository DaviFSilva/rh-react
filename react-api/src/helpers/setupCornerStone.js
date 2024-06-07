import * as cornerstone from '@cornerstonejs/core'
import * as cornerstoneTools from '@cornerstonejs/tools'

export default async function setupCS() {
  await cornerstone.init()
  cornerstoneTools.init()
}