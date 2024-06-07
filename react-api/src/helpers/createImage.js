import * as cornerstone from '@cornerstonejs/core';
import * as cornerstoneTools from '@cornerstonejs/tools';

const viewportId = 'CT_AXIAL_STACK';
const renderingEngineId = 'myRenderingEngine';
const toolGroupId = 'STACK_TOOL_GROUP_ID';

export default function createImage(){
  const element = document.getElementById('imageContainer');

    let imageId = "wadouri:http://localhost:9999";

    const {
      ZoomTool,
      ToolGroupManager,
      ScaleOverlayTool,
      Enums: csToolsEnums,
    } = cornerstoneTools;
    const { MouseBindings } = csToolsEnums;

    cornerstoneTools.addTool(ScaleOverlayTool)
    cornerstoneTools.addTool(ZoomTool)
    let toolGroup = ToolGroupManager.createToolGroup(toolGroupId);

    toolGroup.addTool(ScaleOverlayTool.toolName)
    toolGroup.addTool(ZoomTool.toolName)

    
    toolGroup.setToolActive(cornerstoneTools.ZoomTool.toolName, {
      bindings: [
        {
          mouseButton: MouseBindings.Secondary, //
        },
      ],
    });
    toolGroup.setToolEnabled(ScaleOverlayTool.toolName);    

    const renderingEngine = new cornerstone.RenderingEngine(renderingEngineId);
    const viewportInput = {
      viewportId,
      element,
      type: cornerstone.Enums.ViewportType.STACK,
    };

    renderingEngine.enableElement(viewportInput);

    toolGroup.addViewport(viewportId, renderingEngineId);

    const viewport = renderingEngine.getViewport(viewportId);

    viewport.setStack([imageId]);

    viewport.render();
}

export function getViewportId(){
  return viewportId;
}

export function getRenderingEngineId(){
  return renderingEngineId;
}

export function getToolGroupId(){
  return toolGroupId;
}