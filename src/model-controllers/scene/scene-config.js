import {cameraConfig} from '../../config';

/**
 * This module handles configuration parameters relating to the overall scene.
 */

const sceneConfig = {};

// Keep this value correlated with cameraConfig._zFar.
sceneConfig.renderDistance = 4000;
cameraConfig._zFar = sceneConfig.renderDistance;

const sceneFolderConfig = {
  label: 'Scene',
  config: sceneConfig
};

export {sceneConfig, sceneFolderConfig};
