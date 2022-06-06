import { BSVersion } from "../../main/services/bs-version-manager.service";
import { AvailableVersionsSlider } from "../components/available-versions/available-versions-slider.component";
import { useState } from "react";
import { BsDownloaderService } from "../services/bs-downloader.service";
import { Slideshow } from "renderer/components/slideshow/slideshow.component";

export function AvailableVersionsList() {

  const slideshowImages = [
    require('../../../assets/slideshow-images/image-1-blur.jpg'),
    require('../../../assets/slideshow-images/image-2-blur.jpg'),
    require('../../../assets/slideshow-images/image-3-blur.jpg'),
    require('../../../assets/slideshow-images/image-4-blur.jpg'),
    require('../../../assets/slideshow-images/image-5-blur.png'),
    require('../../../assets/slideshow-images/image-6-blur.png'),
    require('../../../assets/slideshow-images/image-7-blur.png'),
  ];

  const [versionSelected, setVersionSelected] = useState(null as BSVersion);
  const bsDownloaderService: BsDownloaderService = BsDownloaderService.getInstance();

  const selectedVersionCallback = (v: BSVersion) => {
    setVersionSelected(v);
  }

  const startInstall = () => {
    bsDownloaderService.download(versionSelected);
  }

  return (
    <div className="h-full">
      <Slideshow className="absolute w-full h-full top-0" images={slideshowImages}></Slideshow>
      <div className="relative z-[1] max-h-full flex items-center flex-col pt-3">
        <h1 className="text-gray-100 text-2xl mb-4">Select a Version</h1>
        <AvailableVersionsSlider setSelectedVersion={selectedVersionCallback}/>
      </div>
    </div>
  )
}
