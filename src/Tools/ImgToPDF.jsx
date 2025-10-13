import { useState } from "react";

const ImgToPDF = () => {
  const [photos, setPhotos] = useState([]);
  const [paperSize, setPaperSize] = useState("a4");
  const [marginSize, setMarginSize] = useState("normal");
  const [imagePositions, setImagePosition] = useState("cover");

  const onChangePhoto = (e) => {
    setPhotos([...photos, ...Array.from(e.target.files)]);
  };

  const removePhoto = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const getPageControler = () => {
    const unit = {
      a4: { width: 595.28, height: 841.89 },
      letter: { width: 612, height: 792 },
      legal: { width: 612, height: 1008 },
      tabloid: { width: 792, height: 1224 },
      executive: { width: 522, height: 756 },
    };
    return unit[paperSize];
  };

  const getMarginSize = () => {
    const margins = {
      normal: 20,
      narrow: 10,
      moderate: 15,
    };
    return margins[marginSize];
  };

  const pdfGenerate = async (e) => {
    e.preventDefault();

    if (photos.length === 0) {
      alert("Please select images first!");
      return;
    }

    try {
      // Load jsPDF if not already loaded
      if (!window.jspdf) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      // Create a completely new PDF document
      const { jsPDF } = window.jspdf;
      const pdfDoc = new jsPDF();

      const { width, height } = getPageControler();
      const margin = getMarginSize();

      // Process each photo
      for (let index = 0; index < photos.length; index++) {
        const photo = photos[index];

        // Create new image element for each photo
        const img = new Image();
        const imageUrl = URL.createObjectURL(photo);

        // Wait for image to load
        await new Promise((resolve, reject) => {
          img.onload = () => {
            try {
              // Add new page for each image except the first
              if (index > 0) {
                pdfDoc.addPage();
              }

              const pageWidth = width;
              const pageHeight = height;
              const marginVal = getMarginSize();

              // Convert image pixel size to points (72 DPI is ~ standard for jsPDF)
              const pxToPt = 72 / 96;
              const imgWidthPt = img.width * pxToPt;
              const imgHeightPt = img.height * pxToPt;

              const imgAspect = imgWidthPt / imgHeightPt;
              const pageAspect =
                (pageWidth - 2 * marginVal) / (pageHeight - 2 * marginVal);

              let drawWidth, drawHeight, posX, posY;

              if (imagePositions === "cover") {
                // Fill entire page (even crop if necessary)
                const scale = Math.max(
                  pageWidth / imgWidthPt,
                  pageHeight / imgHeightPt
                );
                drawWidth = imgWidthPt * scale;
                drawHeight = imgHeightPt * scale;
                posX = (pageWidth - drawWidth) / 2;
                posY = (pageHeight - drawHeight) / 2;
              } else if (imagePositions === "stretch") {
                drawWidth = pageWidth - 2 * marginVal;
                drawHeight = pageHeight - 2 * marginVal;
                posX = marginVal;
                posY = marginVal;
              } else {
                // Maintain ratio
                const scale = Math.min(
                  (pageWidth - 2 * marginVal) / imgWidthPt,
                  (pageHeight - 2 * marginVal) / imgHeightPt
                );
                drawWidth = imgWidthPt * scale;
                drawHeight = imgHeightPt * scale;

                posX = (pageWidth - drawWidth) / 2;
                if (imagePositions === "top") posY = marginVal;
                else if (imagePositions === "center")
                  posY = (pageHeight - drawHeight) / 2;
                else if (imagePositions === "bottom")
                  posY = pageHeight - drawHeight - marginVal;
                else posY = (pageHeight - drawHeight) / 2;
              }

              // Draw image
              pdfDoc.addImage(
                imageUrl,
                "JPEG",
                posX,
                posY,
                drawWidth,
                drawHeight
              );

              URL.revokeObjectURL(imageUrl);
              resolve();
            } catch (err) {
              reject(err);
            }
          };

          img.onerror = reject;
          img.src = imageUrl;
        });
      }

      // Generate unique filename and save
      const timestamp = new Date().getTime();
      pdfDoc.save(`photos-${timestamp}.pdf`);

      console.log("PDF generated successfully with", photos.length, "images");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-800">
                Image To PDF
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Make a PDF
            </h3>

            <div className="w-full">
              {photos.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">
                    Selected Images ({photos.length})
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {photos.map((photo, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt={`Preview ${index + 1}`}
                          className="rounded-lg shadow-md w-full h-32 object-cover"
                        />
                        <button
                          className="absolute top-2 right-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md shadow-md transition"
                          onClick={() => removePhoto(index)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-2">
                    Upload Images
                  </label>
                  <input
                    type="file"
                    className="w-full border-2 border-gray-300 rounded-lg p-2 cursor-pointer hover:border-blue-400 transition"
                    onChange={onChangePhoto}
                    accept="image/*"
                    multiple
                  />
                </div>

                <div>
                  <label htmlFor="papersize" className="block font-medium mb-2">
                    Paper Size
                  </label>
                  <select
                    value={paperSize}
                    onChange={(e) => setPaperSize(e.target.value)}
                    id="papersize"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option value="a4">A4</option>
                    <option value="letter">Letter</option>
                    <option value="legal">Legal</option>
                    <option value="tabloid">Tabloid</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="margin" className="block font-medium mb-2">
                    Margin Size
                  </label>
                  <select
                    value={marginSize}
                    onChange={(e) => setMarginSize(e.target.value)}
                    id="margin"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option value="normal">Normal</option>
                    <option value="narrow">Narrow</option>
                    <option value="moderate">Moderate</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="imageposition"
                    className="block font-medium mb-2"
                  >
                    Image Position
                  </label>
                  <select
                    value={imagePositions}
                    onChange={(e) => setImagePosition(e.target.value)}
                    id="imageposition"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option value="cover">Cover (Full Page)</option>
                    <option value="top">Top</option>
                    <option value="center">Center</option>
                    <option value="bottom">Bottom</option>
                    <option value="stretch">Stretch</option>
                  </select>
                </div>

                <button
                  onClick={pdfGenerate}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={photos.length === 0}
                >
                  {photos.length === 0
                    ? "Select Images First"
                    : `Generate PDF (${photos.length} images)`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgToPDF;
