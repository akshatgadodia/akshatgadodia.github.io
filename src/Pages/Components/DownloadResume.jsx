import React from "react";
import "./Stylesheets/DownloadResume.css";
import { Button, Tooltip } from "antd";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadResume = () => {
  const OpenPDFInNewTab = () => {
    // const pdfPath = process.env.PUBLIC_URL + "/AkshatGadodiaResume.pdf";
    const pdfPath = "/AkshatGadodiaResume.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <Tooltip
      placement="left"
      title="Download Resume"
      className="download-resume-tooltip"
      trigger="hover"
    >
      <Button
        className="download-resume"
        onClick={OpenPDFInNewTab}
        aria-label="Download Resume"
      >
        <FileDownloadIcon fontSize="medium" />
      </Button>
    </Tooltip>
  );
};

export default DownloadResume;