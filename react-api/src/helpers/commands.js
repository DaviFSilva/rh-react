import { getRenderingEngine, } from "@cornerstonejs/core";
import { getViewportId, getRenderingEngineId, getToolGroupId } from "./createImage";
import { ScaleOverlayTool, ToolGroupManager } from "@cornerstonejs/tools";

export function rotateImage(){
  const renderingEngine = getRenderingEngine(getRenderingEngineId());

  const viewport = renderingEngine.getViewport(getViewportId());

  const { rotation } = viewport.getProperties();
  viewport.setProperties({ rotation: rotation + 90 });

  viewport.render();
}

export function flipImage(){
  
}

export function toggleCrosshair(){
  let toolGroup = ToolGroupManager.getToolGroup(getToolGroupId());

  let state = toolGroup.getToolInstance(ScaleOverlayTool.toolName).mode;

  if (state === "Disabled"){
      toolGroup.setToolEnabled(ScaleOverlayTool.toolName)
  }else{
      toolGroup.setToolDisabled(ScaleOverlayTool.toolName)
  }
}