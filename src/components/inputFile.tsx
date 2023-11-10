import React, { ChangeEvent, useState } from "react";

function InputFile() {
  const [file, setFile] = useState<string | undefined>("No File Selected");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Get the selected file from the input
    //  const file = event.target.files[0];
    const file = event.target.value.split("\\").pop();
    // Do something with the file, e.g., set it in the component state
    setFile(file);
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Unggah Dokumen</p>
      <div>
        <input
          type="file"
          name="dokumen"
          id="dokumen"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="w-full flex border rounded-lg focus:outline-primary-600 bg-gray-50">
          <label
            htmlFor="dokumen"
            className="px-4 py-2 rounded-l-lg bg-primary-600 text-white"
          >
            <p>Browse</p>
          </label>
          <div className="px-4 py-2">
            <p>{file}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputFile;
