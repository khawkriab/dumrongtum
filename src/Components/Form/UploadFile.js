import React, { useState } from "react";
import ReactDOM from "react-dom"
import { withRouter } from 'react-router-dom'
import Block from "../Block";
import Images from '../Images'
import { FormCompUpload, FormCompUpList } from "./Complaint";


const uploadFile = e => {
    e.preventDefault();
};

export const uploadState = {
    fileImgList: [],
    filePdfList: [],
    setFiles(PIC, PDF) {
        this.fileImgList = PIC
        this.filePdfList = PDF
    }
}

const UploadFile = () => {
    const [fileImgList, setFileImgList] = useState([]);
    const [filePdfList, setFilePdfList] = useState([]);

    uploadState.setFiles(fileImgList, filePdfList)

    // ------------------------------------------------------------------------------------
    const isSameFile = (fileImg, fileB) => {
        return fileImg.name === fileB.name;
    }
    // ------------------------------------------------------------------------------------
    const handleFileAdd = event => {
        const newFile = event.target.files[0];
        const isNotDuplicate = fileImgList.every(fileImg => {
            return fileImg.name !== newFile.name;
        });
        if (isNotDuplicate) {
            setFileImgList([...fileImgList, newFile]);
        }
    }
    // ------------------------------------------------------------------------------------
    const removeFile = (e, index) => {
        let newFileList = fileImgList.filter((item, index2) => index !== index2);
        setFileImgList(newFileList);
    }
    // ------------------------------------------------------------------------------------ 
    const handleFilePdfAdd = event => {
        const newFile = event.target.files[0];
        const isNotDuplicate = filePdfList.every(filePdf => {
            return filePdf.name !== newFile.name;
        });
        if (isNotDuplicate) {
            setFilePdfList([...filePdfList, newFile]);
        }
    }
    // ------------------------------------------------------------------------------------
    const removePdfFile = (e, index) => {
        let newFileList = filePdfList.filter((item, index2) => index !== index2);
        setFilePdfList(newFileList);
    }
    // ------------------------------------------------------------------------------------

    return (
        <Block>
            <div className='fx-ali-str' style={{ marginTop: 50 }} >
                <div className="inputFile">
                    <label className="-upImg">
                        <input type="file" accept=".jpg,.png,.jpeg" onChange={handleFileAdd} />อัพโหลดรูปภาพ
                        {/* <input type="file" name="file" accept=".txt" onChange={this.handleChangeFile} ref={(input) => { this.file = input; }} multiple />เลือกไฟล์เกรด */}
                    </label>
                    <label className="-upDoc">
                        <input type="file" accept=".pdf" onChange={handleFilePdfAdd} className='-upDoc' />อัพโหลดเอกสาร
                    </label>
                </div>
                <FormCompUpload >
                    {console.log(fileImgList)}
                    {/* {console.log(filePdfList)} */}
                    {
                        fileImgList.map((fileImg, index) => (
                            <FormCompUpList key={fileImg.name}>
                                <div className='-namefile'>
                                    <img src={Images.Asset14} alt='' />
                                    {/* <label>{fileImg.name}</label> */}
                                    <label>{fileImg.name + " " + bytesToSize(fileImg.size)}</label>
                                </div>
                                <img src={Images.Asset16} data-index={index} onClick={e => { removeFile(e, index) }} alt='' className='-comp-delete' />
                            </FormCompUpList>
                        ))
                    }
                    {
                        filePdfList.map((filePdf, index) => (
                            <FormCompUpList key={filePdf.name}>
                                <div className='-namefile'>
                                    <img src={Images.Asset15} alt='' />
                                    {/* <label>{filePdf.name}</label> */}
                                    <label>{filePdf.name + " " + bytesToSize(filePdf.size)}</label>
                                </div>
                                <img src={Images.Asset16} data-index={index} onClick={e => { removePdfFile(e, index) }} alt='' className='-comp-delete' />
                            </FormCompUpList>
                        ))
                    }
                </FormCompUpload>
            </div>
        </Block>
    );
}
export default withRouter(UploadFile)

function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}
