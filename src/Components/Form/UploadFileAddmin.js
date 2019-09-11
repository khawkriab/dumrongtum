
import React, { useState } from "react";
import ReactDOM from "react-dom"
import { withRouter } from 'react-router-dom'
import Block from "../Block";
import Images from '../Images'
import { FormCompUpload, FormCompUpList } from "./Complaint";

const UploadFileAddmin = ({ handleFileAdd, handleFilePdfAdd, fileImgList, filePdfList, removeFile, removePdfFile, }) => {
    return (
        <Block>
            <p className='headStep' >ไฟล์หลักฐาน</p>
            <div className='fx-ali-str' style={{ marginTop: 50 }} >
                <div className="inputFile">
                    <label className="-upImg">
                        <input type="file" accept=".jpg,.png,.jpeg" onChange={handleFileAdd} />อัพโหลดรูปภาพ
                    </label>
                    <label className="-upDoc">
                        <input type="file" accept=".pdf" onChange={handleFilePdfAdd} className='-upDoc' />อัพโหลดเอกสาร
                    </label>
                </div>
                <FormCompUpload >
                    {/* {console.log(fileImgList)} */}
                    {/* {console.log(filePdfList)} */}
                    {
                        fileImgList.map((fileImg, index) => (
                            <FormCompUpList key={fileImg.name}>
                                <div className='-namefile'>
                                    <img src={Images.Asset14} alt='' />
                                    <label>{fileImg.name + " " + bytesToSize(fileImg.size)}</label>
                                </div>
                                <img src={Images.Asset16} data-index={index} onClick={() => removeFile(index)} alt='' className='-comp-delete' />
                            </FormCompUpList>
                        ))
                    }
                    {
                        filePdfList.map((filePdf, index) => (
                            <FormCompUpList key={filePdf.name}>
                                <div className='-namefile'>
                                    <img src={Images.Asset15} alt='' />
                                    <label>{filePdf.name + " " + bytesToSize(filePdf.size)}</label>
                                </div>
                                <img src={Images.Asset16} data-index={index} onClick={() => removePdfFile(index)} alt='' className='-comp-delete' />
                            </FormCompUpList>
                        ))
                    }
                </FormCompUpload>
            </div>
            <p>รูปซ้ำลบแล้วอัพใหม่ไม่ได้ </p>
        </Block>
    )
}
export default withRouter(UploadFileAddmin)


function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}
