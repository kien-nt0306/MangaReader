import axios from 'axios';
import RNFS, {
  DocumentDirectoryPath,
  DownloadFileOptions,
  downloadFile,
} from 'react-native-fs';

const saveImagesFromURLs = async (
  imageUrls: string[],
  mangaid: string,
  chapters: string,
) => {
  try {
    const exists = await RNFS.exists(DocumentDirectoryPath + '/manga');
    if (!exists) {
      await RNFS.mkdir(DocumentDirectoryPath + '/manga');
    }
    const mangaFolderExist = await RNFS.exists(
      DocumentDirectoryPath + '/manga/' + mangaid,
    );
    if (!mangaFolderExist) {
      await RNFS.mkdir(DocumentDirectoryPath + '/manga/' + mangaid);
    }
    const chapterFolderExist = await RNFS.exists(
      DocumentDirectoryPath + '/manga/' + mangaid + '/' + chapters,
    );
    if (!chapterFolderExist) {
      await RNFS.mkdir(
        DocumentDirectoryPath + '/manga/' + mangaid + '/' + chapters,
      );
    }
    for (let i = 0; i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];

      const downloadOptions: DownloadFileOptions = {
        fromUrl: imageUrl,
        toFile:
          DocumentDirectoryPath +
          '/manga/' +
          mangaid +
          '/' +
          chapters +
          '/image_' +
          i +
          '.png',
      };
      await downloadFile(downloadOptions);
    }
  } catch (error) {
    console.error('Error saving images:', error);
  }
};

export default saveImagesFromURLs;
