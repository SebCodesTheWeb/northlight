/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const MultiFileUploaderPage = () => (
  <ReferencePage data={{"tags":{"see":"MultiFilePicker *\n{@link https://northlight.dev/reference/multi-file-uploader}","example":"(?\n() => {\nconst [ images, setImages ] = useState([])\nreturn (\n<Stack>\n <Box h=\"sm\">\n   <Carousel>\n     { images.map((imageSrc) => (\n       <Image src={imageSrc} borderRadius=\"st.border.radius.md\" />\n     )) }\n   </Carousel>\n </Box>\n <MultiFileUploader\n   acceptFormat=\"image/*\"\n   onChange={ (newFiles) =>\n     setImages(\n       newFiles.map((file) => URL.createObjectURL(file))\n     )\n   }\n />\n </Stack>\n)\n}\n?)"},"filePath":"/Users/orestisrodriguez/Documents/Projects/@mediatool/northlight/framework/lib/components/file-picker/multi-file-uploader.tsx","description":"Input to upload multiple files without ui to render files","displayName":"MultiFileUploader","methods":[],"props":{"acceptFormat":{"defaultValue":{"value":"*"},"description":"Ex: acceptFormat=\"'acceptFormat=\"video/*, .jpg\"","name":"acceptFormat","parent":{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"},"declarations":[{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"}],"required":false,"type":{"name":"string"}},"compression":{"defaultValue":null,"description":"","name":"compression","parent":{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"},"declarations":[{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"}],"required":false,"type":{"name":"CompressionType"}},"maxFileSize":{"defaultValue":{"value":"524288000"},"description":"","name":"maxFileSize","parent":{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"},"declarations":[{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"}],"required":false,"type":{"name":"number"}},"addFilesToQueue":{"defaultValue":null,"description":"Callback Will immediately return file objects before compressed","name":"addFilesToQueue","parent":{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"},"declarations":[{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"}],"required":false,"type":{"name":"(files: T[]) => void"}},"updatePreviewFiles":{"defaultValue":null,"description":"","name":"updatePreviewFiles","parent":{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"},"declarations":[{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"}],"required":false,"type":{"name":"(files: any[]) => void"}},"onChange":{"defaultValue":null,"description":"","name":"onChange","parent":{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"},"declarations":[{"fileName":"northlight/framework/lib/components/file-picker/types.ts","name":"MultiFileUploaderProps"}],"required":false,"type":{"name":"(files: File[]) => void"}}}}} />
);

export default MultiFileUploaderPage