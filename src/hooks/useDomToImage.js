import domToImage from "dom-to-image";
/**
 * https://github.com/zhihuifanqiechaodan/dom-to-image
 */
export default () => {
  const domToImageDownload = async (node) => {
    domToImage.toJpeg(node).then(function (dataUrl) {
      const link = document.createElement("a");
      link.download = "illustrations.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };
  return { domToImageDownload };
};
