import {PDFDocument} from '@shogobg/react-native-pdf';
import PDFPage from '@shogobg/react-native-pdf/js/src/PDFPage';
import RNFS from 'react-native-fs';

async function concatenatePDFs(pdfPaths, outputFileName) {
  try {
    // Create a new PDF document

    const inputPaths = [];

    // Iterate through the input PDF files and append their pages to the new document
    for (let i = 0; i < pdfPaths.length; i++) {
      const inputPdf = await PDFPage.loadFromFile(pdfPaths[i],i);
      inputPaths.push(inputPdf);
    }
    const outputPath = `${RNFS.DocumentDirectoryPath}/${outputFileName}`;
    const pdfDoc = await PDFDocument.modify(outputPath);
    inputPaths.map(item => {
      pdfDoc.modifyPage(item);
    });

    // Save the concatenated PDF to a new file

    const pdfBytes = await pdfDoc.write();
    

    console.log(`Concatenated PDF saved at: ${outputPath}`);
  } catch (error) {
    console.error(error);
  }
}
// Usage example:
const pdfPaths = [
  `${RNFS.DocumentDirectoryPath}/file1.pdf`,
  `${RNFS.DocumentDirectoryPath}/file2.pdf`,
  // Add more PDF file paths as needed
];
export default concatenatePDFs;
//concatenatePDFs(pdfPaths, 'concatenated.pdf');
