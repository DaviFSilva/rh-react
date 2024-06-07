import * as cornerstone from '@cornerstonejs/core'
import * as dicomParser from 'dicom-parser'
import dicomImageLoader from '@cornerstonejs/dicom-image-loader'

export default function setupIL() {
  dicomImageLoader.external.cornerstone = cornerstone;
  dicomImageLoader.external.dicomParser = dicomParser;

  dicomImageLoader.configure({
    useWebWorkers: true,
    decodeConfig: {
      convertFloatPixelDataToInt: false,
    },
  });

  var config = {
    maxWebWorkers: navigator.hardwareConcurrency || 1,
    startWebWorkersOnDemand: false,
    taskConfiguration: {
      decodeTask: {
        initializeCodecsOnStartup: true,
        strict: false,
      },
    },
  };

  dicomImageLoader.webWorkerManager.initialize(config);
}