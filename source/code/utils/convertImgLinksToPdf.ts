import axios from 'axios';
import React, {Component} from 'react';
import {View, Button} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {red} from 'react-native-reanimated';
import concatenatePDFs from './concatPDFFile';
const convertToPDF = async (imageLinks: string[]) => {
  const base64Images = [];

  for (const link of imageLinks) {
    const response = await fetch(link);
    const blob = await response.blob();
    const reader = new FileReader();
    let flag = 1;

    reader.onloadend = () => {
      base64Images.push(reader.result);
    };
    reader.readAsDataURL(blob);
  }
  const pdfList = []
  for (let i = 0; i < base64Images.length; i++) {
    const imgElements = `<img src="${base64Images[i]}" style="width:100% ; height:100%" />`;
    const htmlContent = `<html><body>${imgElements}</body></html>`;
    const options = {
      html: htmlContent,
      fileName: 'images-'+i,
      directory: 'Documents',
    };
    try {
      console.log('start');
      const pdf = await RNHTMLtoPDF.convert(options);
      pdfList.push(pdf.filePath)
      console.log(pdf.filePath);
    } catch (error) {
      console.error(error);
    }
  }
  concatenatePDFs(pdfList,'output.pdf')
};
export default convertToPDF;
