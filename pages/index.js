import Head from 'next/head'
import Image from 'next/image'
import Dropzone from "react-dropzone-uploader";
import styles from '../styles/Home.module.css'
import { Container, Textarea, Checkbox, Input,Select, InputGroup, InputRightAddon, Stack, RadioGroup, Radio } from "@chakra-ui/react"
import { SmallAddIcon } from "@chakra-ui/icons"
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        imageHolder: []
      }

  }
  getImageUploadParams = ({ meta }) => {
		const { imageHolder } = this.state;
		return { url: imageHolder };
	};
  imageChangeStatus = async ({ meta, file }, status) => {
		if (status === "headers_received") {
			try {
				this.setState({ imageHolder: file });
			} catch (err) {
				console.log(err);
			}
		}
	};
  render() {
    const dropDownProps = {
			styles: {
				dropzone: {
					overflow: "auto",
					border: "none",
          height: "70%",
					borderRadius: "10px",
					background: "#EEEEEE",
					marginTop: "10px"
				},
				inputLabelWithFiles: {
					margin: "20px 3%",
				},
				inputLabel: {
					color: "black",
					fontSize: "14px",
				},
			},
			multiple: false,
			maxFiles: 1,
			accept: "image/*",
		};
  return (
    <div className={styles.container}>
      <div className={styles.mainHolder}>
      <Container height="" borderRadius="25px" bg="lightgray.50" maxW="90%" height="270px" boxShadow="md" >
        <Textarea
          padding="20px"
          focusBorderColor="none"
          maxW="100%"
          height="200px"
          border="none"
          placeholder="Section Name"
          fontSize="30px"
          size="xl"
        />
        <Checkbox padding="20px" colorScheme="cyan" fontSize="30px" color="brown">Shuffle Questions</Checkbox>
      </Container>
      <Container height="" borderRadius="25px" marginTop="30px" bg="lightgray.50" maxW="90%" height="270px" boxShadow="md" >
        <div className={styles.questionContainer}>
          <div className={styles.choiceHolder}>
          <Select placeholder="Select option" padding="10px" border="none" borderBottomLeftRadius="20px" variant="filled" bg="rgba(255, 181, 181, 0.891)">
            <option value="option1" className={styles.optionFilter}>Single Choice</option>
            <option value="option2">Multiple Choice</option>
            <option value="option3">Paragraph</option>
            <option value="option3">File Upload</option>
            <option value="option3" className={styles.optionFilter}>Paragraph</option>
          </Select>
            <div>
            <InputGroup padding="20px" size="sm">
            <Input borderColor="rgba(255, 181, 181, 0.891)" placeholder="Total Marks" focusBorderColor="none" borderRight="none" />
            <InputRightAddon bg="rgba(255, 181, 181, 0.891)" borderColor="rgba(255, 181, 181, 0.891)" children="Marks" />
            </InputGroup>
            </div>
            <div>
            <InputGroup padding="20px" size="sm">
              <Input borderColor="rgba(255, 181, 181, 0.891)" placeholder="Negative Marks" focusBorderColor="none" borderRight="none" />
              <InputRightAddon bg="rgba(255, 181, 181, 0.891)" borderColor="rgba(255, 181, 181, 0.891)" children="Marks" />
            </InputGroup>
            </div>
            <div className={styles.optional}>
              <SmallAddIcon /> <p className={styles.label}>Add Optional</p>
            </div>
          </div>
          <div className={styles.inputHolder}>
            <p className={styles.question}>What Is The Size Of Earth ?</p>
            <RadioGroup name="form-name" padding="15px">
            <Stack spacing={9} direction="column">
              <Radio value="1">
                20
              </Radio>
              <Radio value="2">
                40
              </Radio>
              <Radio value="3">
                50
              </Radio>
            </Stack>
            </RadioGroup>
          </div>
        </div>
      </Container>
      <Container height="" borderRadius="25px" marginTop="30px" bg="lightgray.50" maxW="90%" height="270px" boxShadow="md" >
        <div className={styles.questionContainer}>
          <div className={styles.choiceHolder}>
          <Select placeholder="Select option" padding="10px" border="none" borderBottomLeftRadius="20px" variant="filled" bg="rgba(255, 181, 181, 0.891)">
            <option value="option1" className={styles.optionFilter}>Single Choice</option>
            <option value="option2">Multiple Choice</option>
            <option value="option3">Paragraph</option>
            <option value="option3">File Upload</option>
            <option value="option3" className={styles.optionFilter}>Paragraph</option>
          </Select>
            <div>
            <InputGroup padding="20px" size="sm">
            <Input borderColor="rgba(255, 181, 181, 0.891)" placeholder="Total Marks" focusBorderColor="none" borderRight="none" />
            <InputRightAddon bg="rgba(255, 181, 181, 0.891)" borderColor="rgba(255, 181, 181, 0.891)" children="Marks" />
            </InputGroup>
            </div>
            <div>
            <InputGroup padding="20px" size="sm">
              <Input borderColor="rgba(255, 181, 181, 0.891)" placeholder="Negative Marks" focusBorderColor="none" borderRight="none" />
              <InputRightAddon bg="rgba(255, 181, 181, 0.891)" borderColor="rgba(255, 181, 181, 0.891)" children="Marks" />
            </InputGroup>
            </div>
            <div className={styles.optional}>
              <SmallAddIcon /> <p className={styles.label}>Add Optional</p>
            </div>
           </div>
          <div className={styles.inputHolder}>
            <Input 
              focusBorderColor= "none" 
              className={styles.inputEnter} 
              placeholder="Enter a Question" 
              borderBottomColor= "rgba(250, 65, 65, 0.891)"
              borderRightColor= "white"
              borderLeftColor= "white"
              width="70%"
              borderTopColor= "white"
            />
            <RadioGroup name="form-name" padding="15px">
            <Stack spacing={9} direction="column">
              <Radio value="1">
                20
              </Radio>
              <Radio value="2">
                40
              </Radio>
              <Radio value="3">
                50
              </Radio>
            </Stack>
            </RadioGroup>
          </div>
        </div>
      </Container>
      <Container height="" borderRadius="25px" marginTop="30px" bg="lightgray.50" maxW="90%" height="270px" boxShadow="md" >
        <div className={styles.questionContainer}>
          <div className={styles.choiceHolder}>
          <Select placeholder="Select option" padding="10px" border="none" borderBottomLeftRadius="20px" variant="filled" bg="rgba(255, 181, 181, 0.891)">
            <option value="option1" className={styles.optionFilter}>Single Choice</option>
            <option value="option2">Multiple Choice</option>
            <option value="option3">Paragraph</option>
            <option value="option3">File Upload</option>
            <option value="option3" className={styles.optionFilter}>Paragraph</option>
          </Select>
            <div>
            <InputGroup padding="20px" size="sm">
            <Input borderColor="rgba(255, 181, 181, 0.891)" placeholder="Total Marks" focusBorderColor="none" borderRight="none" />
            <InputRightAddon bg="rgba(255, 181, 181, 0.891)" borderColor="rgba(255, 181, 181, 0.891)" children="Marks" />
            </InputGroup>
            </div>
            <div>
            <InputGroup padding="20px" size="sm">
              <Input borderColor="rgba(255, 181, 181, 0.891)" placeholder="Negative Marks" focusBorderColor="none" borderRight="none" />
              <InputRightAddon bg="rgba(255, 181, 181, 0.891)" borderColor="rgba(255, 181, 181, 0.891)" children="Marks" />
            </InputGroup>
            </div>
            <div className={styles.optional}>
              <SmallAddIcon /> <p className={styles.label}>Add Optional</p>
            </div>
           </div>
          <div className={styles.inputHolder}>
            <p className={styles.question}>What Is The Size Of Earth ?</p>
            <Textarea bg="rgba(251, 205, 205, 0.891)" focusBorderColor="none" padding="20px" placeholder="Paragraph" borderBottomRadius="10px" height="90%" width= "50%" />
          </div>
        </div>
      </Container>
      <Container height="" borderRadius="25px" marginTop="30px" bg="lightgray.50" maxW="90%" height="270px" boxShadow="md" >
        <div className={styles.questionContainer}>
          <div className={styles.choiceHolder}>
          <Select placeholder="Select option" padding="10px" border="none" borderBottomLeftRadius="20px" variant="filled" bg="rgba(255, 181, 181, 0.891)">
            <option value="option1" className={styles.optionFilter}>Single Choice</option>
            <option value="option2">Multiple Choice</option>
            <option value="option3">Paragraph</option>
            <option value="option3">File Upload</option>
            <option value="option3" className={styles.optionFilter}>Paragraph</option>
          </Select>
            <div>
            <InputGroup padding="20px" size="sm">
            <Input borderColor="rgba(255, 181, 181, 0.891)" placeholder="Total Marks" focusBorderColor="none" borderRight="none" />
            <InputRightAddon bg="rgba(255, 181, 181, 0.891)" borderColor="rgba(255, 181, 181, 0.891)" children="Marks" />
            </InputGroup>
            </div>
            <div>
            <InputGroup padding="20px" size="sm">
              <Input borderColor="rgba(255, 181, 181, 0.891)" placeholder="Negative Marks" focusBorderColor="none" borderRight="none" />
              <InputRightAddon bg="rgba(255, 181, 181, 0.891)" borderColor="rgba(255, 181, 181, 0.891)" children="Marks" />
            </InputGroup>
            </div>
            <div className={styles.optional}>
              <SmallAddIcon /> <p className={styles.label}>Add Optional</p>
            </div>
           </div>
          <div className={styles.inputHolder}>
            <Input 
              focusBorderColor= "none" 
              className={styles.inputEnter} 
              placeholder="Enter a Question" 
              borderBottomColor= "rgba(250, 65, 65, 0.891)"
              borderRightColor= "white"
              borderLeftColor= "white"
              width="70%"
              borderTopColor= "white"
            />
						<Dropzone getUploadParams={this.imageUploadParams} onChangeStatus={this.imageChangeStatus} {...dropDownProps} />
          </div>
          </div>
      </Container>
      </div>
    </div>
  )
  }
}
export default Home;